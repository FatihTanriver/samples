# Personal Tech Wiki App


    A beta version of what i learned through  online courses. For example one aspect of my project. I have one page in which i have over 200 videos or gif. I showed them in like card html. Which I can mouseover see the animation or interaction in videos. Videos are consist of a component, widget or page ideas. In this page I am building filter mechanism to search specific element or specific animation or specific component with additional filter such as "html and css only" and so on.  For the reason filtering mechanism or search mechanism. And also in some case user interaction like mouse over, zooming, popup a content for detailed explanation. I did not decide to static page approach. 

    My first main goal was, while implementing new mini projects or updating a project. I want to access my know how faster. Find examples  or code snippets that i learned. 

    Second was refreshing what i learned periodically

**ChatGPT Version**
    What type of suggestions you can give, What kind of staff should i take into consideration? Static Page has limitation what i want to achieve. Are there any other tool which can boost me


    Based on the detailed description of your project, it's evident that you're working on a rich, interactive repository of your learnings, complete with videos, GIFs, and a filtering mechanism. This is a commendable initiative and will certainly serve as a valuable resource for you (and potentially others) in the future.

    Given the interactive nature of your project, you're correct in assuming that a purely static page approach might have limitations. However, the landscape of web development has evolved to bridge the gap between static and dynamic solutions. Here are some suggestions and things to consider:

1. **Hybrid Approach**: Modern frameworks like [Next.js](https://nextjs.org/) (for React) or [Nuxt.js](https://nuxtjs.org/) (for Vue) provide a hybrid approach. You can pre-render static pages but also include client-side interactivity. This gives you the best of both worlds: performance benefits of static pages and the dynamism required for features like filtering.

2. **Indexed Search**: Given your filtering mechanism, consider implementing a client-side search library like [Lunr.js](https://lunrjs.com/). It provides a simple full-text search capability in the browser. It can index your content and help in creating a fast and efficient search without needing a backend.

3. **Optimized Media**: Serving 200+ videos or GIFs on a page can be resource-intensive. Consider lazy loading them so they only load when they come into the viewport. Libraries like [lazysizes](https://github.com/aFarkas/lazysizes) can assist with this.

4. **Database vs. File-Based Storage**: If you anticipate the content will grow significantly or want a more structured way to manage your snippets and videos, consider using a lightweight database. If you prefer simplicity, structured files (like JSON or Markdown) can work well, especially with static site generators.

5. **User Interactions**: For more advanced interactions like zooming, consider libraries like [zoom.js](https://github.com/fat/zoom.js/) or [fancybox](https://fancyapps.com/fancybox/3/) for popups and modals.

6. **Documentation and Note-taking**: Tools like [Docusaurus](https://docusaurus.io/) or [TiddlyWiki](https://tiddlywiki.com/) can help you structure your learnings and notes in a searchable, organized manner. These tools are especially useful if you plan to expand this into a full-fledged knowledge base.

7. **Version Control and Backup**: If you're not already doing so, use a version control system like Git. It'll help you track changes, experiment with new features without risk, and ensure you have backups of your valuable content.

8. **Feedback Mechanism**: If you're planning to share this with peers or a broader audience, incorporate a feedback mechanism. Whether it's a simple contact form, comments section, or even integration with platforms like GitHub (e.g., "Report an Issue" linking to a repository), it'll help you refine and expand your content based on user feedback.

9. **Expand and Share**: As your repository grows, consider making it available to others. The broader developer community can benefit from such resources, and it can serve as a portfolio showcasing your learning journey and expertise.

Remember, the right tool or approach often depends on the exact requirements and anticipated growth of the project. Your initiative to build this is commendable, and with the right tools and considerations, it can evolve into a robust and valuable resource for your future endeavors.
