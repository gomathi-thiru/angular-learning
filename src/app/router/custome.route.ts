import { Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { HomeComponent } from './home';
import { UserComponent } from './user';
import { NotFoundComponent } from './not-found';

// Custom route matcher & // this allows to write custom regular expression & conditional logic to handle complex runtiom url config
export const userMatcher: UrlMatcher = (
    // this fn receives an array of obj's representing the part of the URI
  segments: UrlSegment[]
) => {
  // Match URLs containing exactly two segments:
  // /user/123
  if (
    segments.length === 2 &&
    segments[0].path === 'user' &&
    /^\d+$/.test(segments[1].path)
  ) {
    return {
        // mark these url segment as handled
      consumed: segments 
    };
  }

  return null;
};

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    matcher: userMatcher, //path instead of matcher using
    component: UserComponent 
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];