import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context){
    return rss({
        title : 'Yerri | Blog',
        description: 'My fly learning of Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>es-us</language>`,
    });
}
