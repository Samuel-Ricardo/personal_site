import { ArticlesBackground } from '@/assets/images/background/articles/articles.background';
import './articles.style.scss';
import { MODULES } from '@/modules/app.factory';
import { ArticlesContainer } from '@/components/section/home/articles/container/container.component';
import { ArticlesSectionFooter } from '@/components/section/home/articles/footer/footer.component';

export const Articles = () => {
  return (
    <section
      id="articles-section"
      className={MODULES.FONTS.CLASSIC.LIBRE_BASKERVILLE().className}
    >
      <ArticlesBackground />
      <div className="z-0 flex flex-1 content-container">
        <h1 className={`section-title`}>Articles that i Wrotte</h1>

        <ArticlesContainer
          articles={[
            {
              title: 'Docker',
              platforms: [
                {
                  name: 'LinkedIn',
                  url: './',
                  icon: 'https://img.icons8.com/?size=48&id=13930&format=png',
                },
              ],
              description: '1234567890-qwertyuiop´pASDFGHJKLZXCVBNM,.RYEUSW,',
            },
            {
              title: 'Docker',
              platforms: [{ name: 'LinkedIn', url: './' }],
              description: '1234567890-qwertyuiop´pASDFGHJKLZXCVBNM,.RYEUSW,',
              image:
                'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              title: 'Docker',
              platforms: [{ name: 'LinkedIn', url: './' }],
              description: '1234567890-qwertyuiop´pASDFGHJKLZXCVBNM,.RYEUSW,',
            },
          ]}
        />

        <ArticlesSectionFooter
          platforms={[
            {
              name: 'LinkedIn',
              url: './',
              icon: 'https://img.icons8.com/?size=48&id=13930&format=png',
            },
            {
              name: 'Midiunm',
              url: './',
              icon: 'https://img.icons8.com/?size=48&id=13930&format=png',
            },
            {
              name: 'TabNews',
              url: './',
              icon: 'https://img.icons8.com/?size=48&id=13930&format=png',
            },
          ]}
        />
      </div>
    </section>
  );
};
