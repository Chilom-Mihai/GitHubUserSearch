import { Component } from '@angular/core';
import { User } from './home.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userStats = [
    { property: 'public_repos', defaultValue: '8' },
    { property: 'followers', defaultValue: '9873' },
    { property: 'following', defaultValue: '9' }
  ];

  userInfo = [
    { property: 'location', defaultValue: 'San Francisco', icon: 'location.svg', icon2: 'location-dark-mode.svg' },
    { property: 'blog', defaultValue: 'https://github.blog', icon: 'link.svg', icon2: 'link-dark-mode.svg' },
    { property: 'twitter_username', defaultValue: '', icon: 'twitter.svg', icon2: 'twitter-dark-mode.svg' },
    { property: 'company', defaultValue: '@github', icon: 'building.svg', icon2: 'building-dark-mode.svg' }
  ];


  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  searchValue = '';
  user: User | undefined;

  constructor(private githubApiService: SearchService) { }

  searchUser(): void {
    if (this.searchValue.trim() === '') {
      return;
    }
    this.githubApiService.getUser(this.searchValue).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
}
