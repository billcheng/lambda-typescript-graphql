interface CourseArgs {
    id: number;
}

interface Course {
    id: number;
    title: string;
    author: string;
    description: string;
    topic: string;
    url: string;
}

export function course({ id }: CourseArgs): Course {
    return {
        id,
        title: 'My Awesome Book',
        author: 'Bill Cheng',
        description: 'This is my awesome book',
        topic: 'Lambda Node.js',
        url: 'https://'
    };
}