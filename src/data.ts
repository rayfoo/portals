import { PostType } from './components/Post/types';

const post: PostType = {
  id: '1',
  parent: '',
  user: {
    handle: '@somedude',
    avatarURL:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    isVerified: true,
  },
  postedIn: {
    name: 'IWantToLearn',
    url: 'reddit.com',
  },
  title: `Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque`,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget eleifend ex, vel finibus dolor. Donec ac pellentesque ipsum. Vivamus vel efficitur odio, ut feugiat libero. Aliquam elit mi, condimentum in mattis et, malesuada in diam. Sed pellentesque, libero vel tincidunt varius, metus metus maximus est, ut tempus sapien nunc nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis cursus mollis lacus, sit amet tristique odio efficitur id.Donec sit amet lorem ipsum. In orci sem, fermentum ac tellus ut, cursus semper dui. Fusce feugiat augue et odio dapibus, vitae tempor arcu malesuada.

 Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque. Phasellus eget vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in felis est. Suspendisse finibus accumsan tincidunt. Pellentesque fringilla neque tellus, sit amet vestibulum enim pellentesque vitae. Etiam rhoncus finibus libero. Aliquam iaculis sodales dolor, vel suscipit felis laoreet in. Quisque nibh risus, ultricies non risus in, maximus gravida lacus. Aenean convallis quam diam, in congue dui gravida vitae.`,
  media: {
    images: [
      'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
  },
  reactions: [{ reaction: '😂', count: 10 }],
  replies: 0,
};

const post2: PostType = {
  id: '2',
  parent: '',
  user: {
    handle: '@someperson2',
    avatarURL: 'https://randomuser.me/api/portraits/women/44.jpg',
    isVerified: true,
  },
  postedIn: {
    name: 'AwesomeAnimals',
    url: 'reddit.com',
  },
  title: `Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque`,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget eleifend ex, vel finibus dolor. Donec ac pellentesque ipsum. Vivamus vel efficitur odio, `,
  media: {
    images: [
      'https://images.unsplash.com/photo-1607923432848-62f872d16daf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
  },
  reactions: [{ reaction: '😂', count: 10 }],
  replies: 20,
};

const post3: PostType = {
  id: '3',
  parent: 'post123',
  user: {
    handle: '@someperson2',
    avatarURL: 'https://randomuser.me/api/portraits/women/44.jpg',
    isVerified: true,
  },
  postedIn: {
    name: 'AwesomeAnimals',
    url: 'reddit.com',
  },
  title: `Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque`,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget eleifend ex, vel finibus dolor. Donec ac pellentesque ipsum. Vivamus vel efficitur odio, ut feugiat libero. Aliquam elit mi, condimentum in mattis et, malesuada in diam. Sed pellentesque, libero vel tincidunt varius, metus metus maximus est, ut tempus sapien nunc nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis cursus mollis lacus, sit amet tristique odio efficitur id.Donec sit amet lorem ipsum. In orci sem, fermentum ac tellus ut, cursus semper dui. Fusce feugiat augue et odio dapibus, vitae tempor arcu malesuada.

  Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque. Phasellus eget vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in felis est. Suspendisse finibus accumsan tincidunt. Pellentesque fringilla neque tellus, sit amet vestibulum enim pellentesque vitae. Etiam rhoncus finibus libero. Aliquam iaculis sodales dolor, vel suscipit felis laoreet in. Quisque nibh risus, ultricies non risus in, maximus gravida lacus. Aenean convallis quam diam, in congue dui gravida vitae.`,
  media: {
    images: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
  },
  reactions: [{ reaction: '😂', count: 10 }],
  replies: 3,
};

export const parent: PostType = {
  id: '1',
  parent: '',
  user: {
    handle: '@somedude',
    avatarURL:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    isVerified: true,
  },
  postedIn: {
    name: 'IWantToLearn',
    url: 'reddit.com',
  },
  title: `Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque`,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget eleifend ex, vel finibus dolor. Donec ac pellentesque ipsum. Vivamus vel efficitur odio, ut feugiat libero. Aliquam elit mi, condimentum in mattis et, malesuada in diam. Sed pellentesque, libero vel tincidunt varius, metus metus maximus est, ut tempus sapien nunc nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis cursus mollis lacus, sit amet tristique odio efficitur id.Donec sit amet lorem ipsum. In orci sem, fermentum ac tellus ut, cursus semper dui. Fusce feugiat augue et odio dapibus, vitae tempor arcu malesuada.

  Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque. Phasellus eget vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in felis est. Suspendisse finibus accumsan tincidunt. Pellentesque fringilla neque tellus, sit amet vestibulum enim pellentesque vitae. Etiam rhoncus finibus libero. Aliquam iaculis sodales dolor, vel suscipit felis laoreet in. Quisque nibh risus, ultricies non risus in, maximus gravida lacus. Aenean convallis quam diam, in congue dui gravida vitae.`,
  media: {
    images: [
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
  },
  reactions: [{ reaction: '😂', count: 10 }],
  replies: 0,
};

export const reply: PostType = {
  id: '1',
  parent: 'post123',
  user: {
    handle: '@somenewperson',
    avatarURL:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    isVerified: true,
  },
  postedIn: {
    name: 'IWantToLearn',
    url: 'reddit.com',
  },
  title: `Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque`,
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget eleifend ex, vel finibus dolor. Donec ac pellentesque ipsum. Vivamus vel efficitur odio, ut feugiat libero. Aliquam elit mi, condimentum in mattis et, malesuada in diam. Sed pellentesque, libero vel tincidunt varius, metus metus maximus est, ut tempus sapien nunc nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis cursus mollis lacus, sit amet tristique odio efficitur id.Donec sit amet lorem ipsum. In orci sem, fermentum ac tellus ut, cursus semper dui. Fusce feugiat augue et odio dapibus, vitae tempor arcu malesuada.

  Morbi fermentum commodo nulla at tincidunt. Praesent eu fermentum neque. Phasellus eget vulputate mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in felis est. Suspendisse finibus accumsan tincidunt. Pellentesque fringilla neque tellus, sit amet vestibulum enim pellentesque vitae. Etiam rhoncus finibus libero. Aliquam iaculis sodales dolor, vel suscipit felis laoreet in. Quisque nibh risus, ultricies non risus in, maximus gravida lacus. Aenean convallis quam diam, in congue dui gravida vitae.`,
  media: {
    images: [
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    ],
    video: '',
  },
  reactions: [{ reaction: '😂', count: 10 }],
  replies: 0,
};

export const posts = [post, post2, post3];
