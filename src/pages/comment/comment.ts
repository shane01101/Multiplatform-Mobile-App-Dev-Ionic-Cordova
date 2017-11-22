import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Comment } from '../../shared/comment';

@IonicPage()
@Component({
	selector: 'page-comment',
	templateUrl: 'comment.html',
})
export class CommentPage {
	commentForm: FormGroup;
	comment: Comment;
	rating: Number;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public viewController: ViewController,
		private formBuilder: FormBuilder) {

			this.commentForm = this.formBuilder.group({
				rating: 5,
				comment: ['', Validators.required],
				author: ['', [Validators.required, Validators.minLength(2)]],
			});

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CommentPage');
	}

	dismiss() {
		this.viewController.dismiss();
	}

	onSubmit() {
		console.log(this.comment);

		this.comment = this.commentForm.value;
		this.comment.date = new Date().toISOString();

		this.viewController.dismiss(this.comment);
	  }

}
