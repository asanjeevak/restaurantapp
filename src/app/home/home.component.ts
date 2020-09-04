import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createRestaurant, createRestaurantComment } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { listRestaurants } from '../../graphql/queries';
import { Restaurant, RestaurantComment } from '../types/restaurant';
import * as Observable from 'zen-observable';
import { onCreateRestaurant, onCommentsByRestaurantId } from '../../graphql/subscriptions';
import { onCreateRestaurantComment } from '../../graphql/subscriptions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public createForm: FormGroup;
  restaurants: Array<Restaurant>;
  restaurantComments: Array<RestaurantComment>;
  restaurantComment: RestaurantComment;
  constructor(private fb: FormBuilder) { }
  async ngOnInit() {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
    const response = await API.graphql(graphqlOperation(listRestaurants));
    this.restaurants = (response as any).data.listRestaurants.items;
    const subscription = API.graphql(
      graphqlOperation(onCreateRestaurant)
    ) as Observable<object>;

    subscription.subscribe({
      next: (sourceData) => {
        const newRestaurant = (sourceData as any).value.data.onCreateRestaurant;
        console.log(newRestaurant);
        this.restaurants = [newRestaurant, ...this.restaurants];
        this.restaurants = [...new Set([...this.restaurants])];
      }
    });
    const commentSubscription = API.graphql(
      graphqlOperation(onCreateRestaurantComment)
    ) as Observable<object>;

    commentSubscription.subscribe({
      next: (sourceData) => {
        const newRestaurantComment = (sourceData as any).value.data.onCreateRestaurantComment;
        console.log('subscription for general comment ');
        console.log(newRestaurantComment);
        // this.restaurantComments = [newRestaurantComment, ...this.restaurantComments];
        // this.restaurantComments.push(newRestaurantComment);
      }
    });

    // Auto subscribe for events in init -- uncomment below lines
    // console.log('listening for comments on restaurant with id' + this.restaurants[0].id + ' and name ' + this.restaurants[0].name);
    // const commentOnRestaurantSubscription = API.graphql(
    //   graphqlOperation(onCommentsByRestaurantId, {restaurantCommentsId: this.restaurants[0].id})
    // ) as Observable<object>;

    // commentOnRestaurantSubscription.subscribe({
    //   next: (sourceData) => {
    //     const newCommentRestaurant = (sourceData as any).value.data.onCommentsByRestaurantId;
    //     console.log('subscription to restaurant comment - ' + this.restaurants[0].id);
    //     console.log(newCommentRestaurant);
    //     this.restaurantComment = newCommentRestaurant.content;
    //     // this.restaurantComments = [newCommentRestaurant, ...this.restaurantComments];
    //     // this.restaurants = [...new Set([...this.restaurants])];
    //   }
    // });

  }

  public async onCreate(restaurant: any) {
    try {
      await API.graphql(graphqlOperation(createRestaurant, {
        input: restaurant
      }));
      console.log('item created!');
      this.restaurants = [restaurant, ...this.restaurants];
      this.restaurants = [...new Set([...this.restaurants])];
      this.createForm.reset();
    } catch (e) {
      console.log('error creating restaurant...', e);
    }
  }

  public async createComment(content, restaurantId) {
    try {
      const restaurantComment = {
        content: content,
        restaurantCommentsId: restaurantId
      };
      console.log(content);
      console.log(restaurantComment.content);

      await API.graphql(graphqlOperation(createRestaurantComment, {
        input: restaurantComment
      }));
      // console.log('comment created!');
    } catch (e) {
      console.log('error creating comment for restaurant...', e);
    }
  }

  public async subscribeForComments(restaurantId) {
    console.log('listening for comments on restaurant with id' + restaurantId + ' and name ');
    const commentOnRestaurantSubscription = API.graphql(
      graphqlOperation(onCommentsByRestaurantId, {restaurantCommentsId: restaurantId})
    ) as Observable<object>;

    commentOnRestaurantSubscription.subscribe({
      next: (sourceData) => {
        const newCommentRestaurant = (sourceData as any).value.data.onCommentsByRestaurantId;
        console.log('subscription to restaurant comment - ' + restaurantId);
        console.log(newCommentRestaurant);
        this.restaurantComment = newCommentRestaurant.content;
      }
    });
  }
}
