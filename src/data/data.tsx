import { img12, img13, img14, img15, img16, img17, img18, img7, img9 } from "../assets"
export type BlogType = {
    id: number,
    title: string,
    content: string,
    createAt: string,
    image: string
}

export const data: BlogType[] = [
    {
        id: 0,
        title: "Transform your winter blues into winter creativity",
        content: getContent(img9),
        createAt: "Nov 29, 2022",
        image: img9
    },
    {
        id: 1,
        title: "5 reasons to wake up at 5am",
        content: getContent(img7),
        createAt: "Nov 29, 2022",
        image: img7
    },
    {
        id: 2,
        title: "How decluttering changed my life",
        content: getContent(img12),
        createAt: "Nov 29, 2022",
        image: img12
    },
    {
        id: 3,
        title: "The things we carry, and what we can let go of",
        content: getContent(img13),
        createAt: "Nov 29, 2022",
        image: img13
    },
    {
        id: 4,
        title: "When expecting, expect the unexpected",
        content: getContent(img14),
        createAt: "Nov 29, 2022",
        image: img14
    },
    {
        id: 5,
        title: "Surprising discoveries during walking tours",
        content: getContent(img15),
        createAt: "Nov 29, 2022",
        image: img15
    },
    {
        id: 6,
        title: "Join the re-commerce revolution",
        content: getContent(img16),
        createAt: "Nov 29, 2022",
        image: img16
    },
    {
        id: 7,
        title: "Starting fresh: New Year resolutions",
        content: getContent(img17),
        createAt: "Nov 29, 2022",
        image: img17
    },
    {
        id: 8,
        title: "Top street markets in the Middle East",
        content: getContent(img18),
        createAt: "Nov 29, 2022",
        image: img18
    }
]


function getContent(img: string): string {
    return `
      <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
      <img src=${img} alt="image" />
      <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>
      <h3>Design with Ease</h3>
      <blockquote>“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”</blockquote>
      <p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.</p>
      <h3>Create Relevant Content</h3>
      <p>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</p>
      <h3>Stun Your Readers </h3>
      <blockquote>“Be original, show off your style, and tell your story.”</blockquote>
      <p>Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.</p>
      <h3>Get Inspired</h3>
      <p>To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!</p>
      `;
}