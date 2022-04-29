import Post from './models/post';

export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex at lacus eleifend pharetra.' +
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;' +
            ' Phasellus faucibus, elit eu auctor condimentum, sem nisl gravida orci, a sagittis urna leo sit amet tellus.' +
            'Maecenas laoreet porta dictum. Morbi et nisl vitae diam rhoncus pellentesque non vel purus.' +
            'Vivamus vitae mauris porttitor, tincidunt sapien at, interdum leo.' +
            'Donec facilisis, nunc nec cursus semper, ligula mauris molestie nulla, id placerat nisl nisl id eros.' +
            'Praesent tempor ultrices arcu, id porta velit vestibulum eget.' +
            'Mauris urna tortor, mattis at molestie vitae, venenatis ut justo. Duis auctor non urna in posuere.',
        tags: ['가짜', '데이터'],
    }));

    Post.insertMany(posts, (err, docs) => {
        console.log(docs)
    });
}