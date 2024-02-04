import { TechsGalaxy } from '@/components/section/techs/galaxy/galaxy.component';
import './techs.style.scss';
import { TechsBackground } from '@/images/background/techs/techs.background';
import { TechsIlustration } from '@/images/section/tech.asset';

export const Techs = () => {
  return (
    <section id="techs-section">
      <TechsBackground />

      <h1 id="techs-title">A UNIVERSE OF POSSIBILITIES</h1>
      <h2 id="techs-subtitle">THE BEST SOLUTIONS FOR EACH CHALLENGE</h2>

      <div id="techs-container-layer-1">
        <TechsGalaxy
          title="Frontend"
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React Full Stack framework for building fast and efficient web applications with good SEO.',
                images: [
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw4NDQ0NDQ0NDQ4ODQ0NDw8NDg0NFREWFhURFRYYHigsGBolGxUVITUiJjArLi46Ix8zRDMtNygtOisBCgoKDg0OGxAPGisdHR0tKy0tLS0tMCstLS0tLSstKy0tLS0tLSstLS0tKy0tLS0tKy0tNy0tNy0rLSsrLSs3N//AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEBAQEAAwEAAAAAAAAAAAAAAQIDBQYHBP/EAD8QAAIBAgIFBwkHAwUBAAAAAAABAgMRBCEFEjFBUQYTImFxkdEHMlJygZKxssEUQmKhosLwgpPSMzRks7Qj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAHREBAQEBAAIDAQAAAAAAAAAAAAERQRJRAjFhIf/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBUARpERpAVFQRpIAjaREjpFAWKNpERbgaMtmXIw5AVszcjYA/GAAAAAAAAAAAAAAAACogAFS+AACwACxDRAICgCFFgANJER1kujF8XL6FkRhGkRGkiKqRpIJG0gKkbRlC4GrkcjLkYbA05GbkuAKCXJcD8wAAAAAAAAAAGmsl2v6GTbXRj60vhEsSskKQitQXwfwZLGqW3+mXysyXidagtvqsljdJbfVkZQ4dLCxUhYiiW3s+qJY3FZS7P3IzYtBRvfNK1ttyaq9Jfq8DaXRl2x+pgINZbU83xJYtgFDo/Nj2y+hixrcvaIgjaREjaIqpGjIuBq5lsy2S4FbIQAUXJcjYFbJcy2ZuBgAAAAAAAA0odnejIKOipPjH34eJZq0UsspSeTi9qXB9RzRC7MTKqAQMq6Udr9SfyMwapPP+mXysyi8TrpSaV73s4tZK+32l1Y+lL3F/kZj9Cou/wxtQVpNOWSTzil95Lj1mbG4bJ+qvniZsLn8IsVlL1Vu/HEzY6Q2T9VfPExYXhFiujLth9TnY6x82XbD6nOwv1CdSwsWwsZUSNKPWvzJYoG1FelHul4GtVenHun4HMly7+JjpZelH9XgZfrL9XgYbJcaNe1fn4AyCKoIRsCtmWyNkbANkBAAAA1ZcX3LxFo8Ze6vEyC6jdo+lL3V4knGza4NoydK/ny9aXxLw65gAyqoBEA0vEnf3Hs3k75OUtLY37JXqVKUOYqVNalq6142ss11n6PKFyKnoatBwlKtgq6ToYhpX17dKnO2yW9cV2Owepx9ux7uoL29x30dQVWtRpNtKrVp021tSlJJtd59X0r5O9B4KpzOK0xiKFXVU1Ccad9RtpPKD4Mo+SR37dnAqS6+4+k47kpoCFGtOjpurUqwo1JUqbjC06ii3GPmb2kjxnk95L4LS0q2Hr4mth8Wk5YZRVN0qsVHNNNX1k87J5rsYHpkd+3Zw60P5sPY3yOxaxz0dzT5/X1Evutbde/o2zvwPK+UDkvgtE8zh6OJq4jGNKWITUI0qcdXqzu3mlfJbdqCPSVv7PqjNu3uPqei+RugsTzNOOmKzxFZU481GML87K3QV4cXYuk+Q+gcJVnh8TpuvRrU3HXpyjTvHWipLZDg0wPle5+zcSxuS222XyfFGbASxLHfnFTjFqMJTmnJynFTUIqTikovK/Rbu09q2b+bxkuFH+xQX7SKwDc681lKME7J2dGlF2aun5pzdd8If26fgAuS4Uta6aV7NppKOxXtkZAoIAKCEuBWyNkbIABAAAAAAAAAAO03BtvWkrtvzU/qcQWVLHS0PSn7i/wAiNR4y91eJgDZ6M/Vy6+4BECvfPIxPV0pf/i1vjE81oDlFSxdXHaB0m9bDV8ViFg6srKVCo6smoJvZnnF7nlmnl6byB01S0fjPtFfX5vmakOhHWld2tl7Dw2ksQqtevVhfVqVqs43yerKba+JB5vFcn6ujdJUcPWz1cRSlTqJWjVp84tWa7tm53R9R5e0ND1cVGek6+Jp1+ZgkqSk482pSs8oPO7kem4XlfhsZhaNPSWv9swk1KhiYx13NKz6We+1nxsntPK6Z5QaFx9RVsSsROaioJpSj0U21kn1sD1zlbh9EQowejK+IqVnU/wDoqqlqqlqvNXis76p65oitUp1qc6EpqrGcXBwXSU08rW33PccbW0DzVXmqeI53m583dzsqlujfPZex4/kNpPBYGc8VitedeF/s9OMLpO3ntvfuXDbwtR9iwGlqtajVm8PThpmhhublCainK61ouL3wbzte18rnwDS9erVr1Z4iU5VpTk6jmulr3zv13PLy5Z4l4549S6ayULvU5q/+lb0beO068t9KYPHThisMqlPETSWJpThaLdvPUk9q2Pjk+2D8fImerpHAO7/3mG/7Yn7fKdPW0vjXd7cP/wCakeF0BjI4fFYavO+pRr0qk9VXerGabst+w78rtJQxuNxGKo6zp1XTcNdasujShF3W7OLKjxLaW8itxPYtDaQoYNTca06k6lai7ywz1acacqlqltdN31o5JqSz4K/jdP4uFfESq05TnFwpJzqX1pTjBKTTebWWTk3Liwrxtb7q4Ra/XJ/U+o6T0hjcbheSlfDUMNVxrraY+zYdUqFPDx5urTVOEYO0UoxirXzyW1ny6cb2tuVmt+1u/wCZ0eIr6tKHOVtWhKUqEdeerRlJqTcFfottJ3RB9Q8oGDxekNHaLcaOkMTiXjMXSa0hh+b0pOo6fOShTpwWdBKMnfO1lsseW8k+ioYbDU3Qq4KriNJYbFVMbL7TR53D0I0ZKjh4wburyevKWVrJZ2y+Q1tMY6pUhXnjMbOvSTVKtOvWlVppqzUZN3jdZZH5MLVrUJa9GdWjPVlHXpSlTlqtWcbp7GtwGZ0nTqTptxbg6kG4SU4tpNXUltXWjkajHVu3lk0lvd1YyBSXBLgW5m4AAgAAAAAAAAAAAAAAABpR7O9FVJ8Y+/HxLlTYygadNr0fZKL+DMCywVeICIFbh7dj+AVustHa/Vn8jMjiddI79uwqsYj9CoK6rf8AzeEZT2/zeW4G1v8A5vF0IbJdUf3IzcI1cy2LmWwo2YduBWzLIGXAyUgA3RzlFbU5Rv3nM6Yfz4evH4l+P3E+X0nOvhH3IeBOcf4fdj4GSDyvsyNa76vdj4DX7O5GQNpkXW7O5C/8sQE1QAAAAAAAAAAAAAAAFN142k12fA5nSu+k/Z8DXE6wgQGVdKLzfqz+VmS09v8ATL5WZLxOtJmkzCKmRXWnbpXvlG+TS+8lw6yqUfRl76/xMQeUvV/dElzW4mOymrOyeatnJP7yfDqMXM3JclukjdyXM3Jcita38sia/Z3R8DJC7UxvnH1e7HwHPP8AD7kPA5geV9mR059/h9yHgPtEvw+5DwOQL5/L2eM9AAMqAAAAAAAAAAAAAAAAAAAAABqbzMgCx2rtLrdS/MiIXUa1upb+JCAarQuQEG4vzuz6olyJ7ez6ohUbuQgIq3FyEApAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACggAtwQAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              preview: {
                name: 'ReactJS',
                description:
                  'The Facebook technology to build advanced User Interfaces.',
                images: [
                  'https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
              preview: {
                name: 'Tailwind CSS',
                description: "Advanced styles technology to build modern UI's",
                images: [
                  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
              preview: {
                name: 'Sass',
                description: 'Improve CSS Styles development',
                images: [
                  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
                ],
              },
            },
            {
              icon: 'https://vitejs.dev/logo-with-shadow.png',
              preview: {
                name: 'Vite',
                description:
                  'Next Generation Frontend Tooling to improve pure React Projects',
                images: [
                  'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ucL7YQ2v8aaOy426soLPZA.png',
                ],
              },
            },
          ]}
        />
        <TechsGalaxy
          title="Backend"
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw4NDQ0NDQ0NDQ4ODQ0NDw8NDg0NFREWFhURFRYYHigsGBolGxUVITUiJjArLi46Ix8zRDMtNygtOisBCgoKDg0OGxAPGisdHR0tKy0tLS0tMCstLS0tLSstKy0tLS0tLSstLS0tKy0tLS0tKy0tNy0tNy0rLSsrLSs3N//AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEBAQEAAwEAAAAAAAAAAAAAAQIDBQYHBP/EAD8QAAIBAgIFBwkHAwUBAAAAAAABAgMRBCEFEjFBUQYTImFxkdEHMlJygZKxssEUQmKhosLwgpPSMzRks7Qj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAHREBAQEBAAIDAQAAAAAAAAAAAAERQRJRAjFhIf/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBUARpERpAVFQRpIAjaREjpFAWKNpERbgaMtmXIw5AVszcjYA/GAAAAAAAAAAAAAAAACogAFS+AACwACxDRAICgCFFgANJER1kujF8XL6FkRhGkRGkiKqRpIJG0gKkbRlC4GrkcjLkYbA05GbkuAKCXJcD8wAAAAAAAAAAGmsl2v6GTbXRj60vhEsSskKQitQXwfwZLGqW3+mXysyXidagtvqsljdJbfVkZQ4dLCxUhYiiW3s+qJY3FZS7P3IzYtBRvfNK1ttyaq9Jfq8DaXRl2x+pgINZbU83xJYtgFDo/Nj2y+hixrcvaIgjaREjaIqpGjIuBq5lsy2S4FbIQAUXJcjYFbJcy2ZuBgAAAAAAAA0odnejIKOipPjH34eJZq0UsspSeTi9qXB9RzRC7MTKqAQMq6Udr9SfyMwapPP+mXysyi8TrpSaV73s4tZK+32l1Y+lL3F/kZj9Cou/wxtQVpNOWSTzil95Lj1mbG4bJ+qvniZsLn8IsVlL1Vu/HEzY6Q2T9VfPExYXhFiujLth9TnY6x82XbD6nOwv1CdSwsWwsZUSNKPWvzJYoG1FelHul4GtVenHun4HMly7+JjpZelH9XgZfrL9XgYbJcaNe1fn4AyCKoIRsCtmWyNkbANkBAAAA1ZcX3LxFo8Ze6vEyC6jdo+lL3V4knGza4NoydK/ny9aXxLw65gAyqoBEA0vEnf3Hs3k75OUtLY37JXqVKUOYqVNalq6142ss11n6PKFyKnoatBwlKtgq6ToYhpX17dKnO2yW9cV2Owepx9ux7uoL29x30dQVWtRpNtKrVp021tSlJJtd59X0r5O9B4KpzOK0xiKFXVU1Ccad9RtpPKD4Mo+SR37dnAqS6+4+k47kpoCFGtOjpurUqwo1JUqbjC06ii3GPmb2kjxnk95L4LS0q2Hr4mth8Wk5YZRVN0qsVHNNNX1k87J5rsYHpkd+3Zw60P5sPY3yOxaxz0dzT5/X1Evutbde/o2zvwPK+UDkvgtE8zh6OJq4jGNKWITUI0qcdXqzu3mlfJbdqCPSVv7PqjNu3uPqei+RugsTzNOOmKzxFZU481GML87K3QV4cXYuk+Q+gcJVnh8TpuvRrU3HXpyjTvHWipLZDg0wPle5+zcSxuS222XyfFGbASxLHfnFTjFqMJTmnJynFTUIqTikovK/Rbu09q2b+bxkuFH+xQX7SKwDc681lKME7J2dGlF2aun5pzdd8If26fgAuS4Uta6aV7NppKOxXtkZAoIAKCEuBWyNkbIABAAAAAAAAAAO03BtvWkrtvzU/qcQWVLHS0PSn7i/wAiNR4y91eJgDZ6M/Vy6+4BECvfPIxPV0pf/i1vjE81oDlFSxdXHaB0m9bDV8ViFg6srKVCo6smoJvZnnF7nlmnl6byB01S0fjPtFfX5vmakOhHWld2tl7Dw2ksQqtevVhfVqVqs43yerKba+JB5vFcn6ujdJUcPWz1cRSlTqJWjVp84tWa7tm53R9R5e0ND1cVGek6+Jp1+ZgkqSk482pSs8oPO7kem4XlfhsZhaNPSWv9swk1KhiYx13NKz6We+1nxsntPK6Z5QaFx9RVsSsROaioJpSj0U21kn1sD1zlbh9EQowejK+IqVnU/wDoqqlqqlqvNXis76p65oitUp1qc6EpqrGcXBwXSU08rW33PccbW0DzVXmqeI53m583dzsqlujfPZex4/kNpPBYGc8VitedeF/s9OMLpO3ntvfuXDbwtR9iwGlqtajVm8PThpmhhublCainK61ouL3wbzte18rnwDS9erVr1Z4iU5VpTk6jmulr3zv13PLy5Z4l4549S6ayULvU5q/+lb0beO068t9KYPHThisMqlPETSWJpThaLdvPUk9q2Pjk+2D8fImerpHAO7/3mG/7Yn7fKdPW0vjXd7cP/wCakeF0BjI4fFYavO+pRr0qk9VXerGabst+w78rtJQxuNxGKo6zp1XTcNdasujShF3W7OLKjxLaW8itxPYtDaQoYNTca06k6lai7ywz1acacqlqltdN31o5JqSz4K/jdP4uFfESq05TnFwpJzqX1pTjBKTTebWWTk3Liwrxtb7q4Ra/XJ/U+o6T0hjcbheSlfDUMNVxrraY+zYdUqFPDx5urTVOEYO0UoxirXzyW1ny6cb2tuVmt+1u/wCZ0eIr6tKHOVtWhKUqEdeerRlJqTcFfottJ3RB9Q8oGDxekNHaLcaOkMTiXjMXSa0hh+b0pOo6fOShTpwWdBKMnfO1lsseW8k+ioYbDU3Qq4KriNJYbFVMbL7TR53D0I0ZKjh4wburyevKWVrJZ2y+Q1tMY6pUhXnjMbOvSTVKtOvWlVppqzUZN3jdZZH5MLVrUJa9GdWjPVlHXpSlTlqtWcbp7GtwGZ0nTqTptxbg6kG4SU4tpNXUltXWjkajHVu3lk0lvd1YyBSXBLgW5m4AAgAAAAAAAAAAAAAAABpR7O9FVJ8Y+/HxLlTYygadNr0fZKL+DMCywVeICIFbh7dj+AVustHa/Vn8jMjiddI79uwqsYj9CoK6rf8AzeEZT2/zeW4G1v8A5vF0IbJdUf3IzcI1cy2LmWwo2YduBWzLIGXAyUgA3RzlFbU5Rv3nM6Yfz4evH4l+P3E+X0nOvhH3IeBOcf4fdj4GSDyvsyNa76vdj4DX7O5GQNpkXW7O5C/8sQE1QAAAAAAAAAAAAAAAFN142k12fA5nSu+k/Z8DXE6wgQGVdKLzfqz+VmS09v8ATL5WZLxOtJmkzCKmRXWnbpXvlG+TS+8lw6yqUfRl76/xMQeUvV/dElzW4mOymrOyeatnJP7yfDqMXM3JclukjdyXM3Jcita38sia/Z3R8DJC7UxvnH1e7HwHPP8AD7kPA5geV9mR059/h9yHgPtEvw+5DwOQL5/L2eM9AAMqAAAAAAAAAAAAAAAAAAAAABqbzMgCx2rtLrdS/MiIXUa1upb+JCAarQuQEG4vzuz6olyJ7ez6ohUbuQgIq3FyEApAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACggAtwQAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,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',
                ],
              },
            },
          ]}
        />
      </div>
      <div id="techs-container-layer-2">
        <div id="tech-ilustration">
          <TechsIlustration />
        </div>
      </div>
      <div id="techs-container-layer-3">
        <TechsGalaxy
          title="Devops + Databases"
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,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',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,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',
                ],
              },
            },
          ]}
        />
        <TechsGalaxy
          title="Quality Assurance"
          items={[
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,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',
                ],
              },
            },
            {
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              preview: {
                name: 'Next.js',
                description:
                  'The React framework for building web applications. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                images: [
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDw4NDQ0NDQ0NDQ4ODQ0NDw8NDg0NFREWFhURFRYYHigsGBolGxUVITUiJjArLi46Ix8zRDMtNygtOisBCgoKDg0OGxAPGisdHR0tKy0tLS0tMCstLS0tLSstKy0tLS0tLSstLS0tKy0tLS0tKy0tNy0tNy0rLSsrLSs3N//AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEBAQEAAwEAAAAAAAAAAAAAAQIDBQYHBP/EAD8QAAIBAgIFBwkHAwUBAAAAAAABAgMRBCEFEjFBUQYTImFxkdEHMlJygZKxssEUQmKhosLwgpPSMzRks7Qj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAHREBAQEBAAIDAQAAAAAAAAAAAAERQRJRAjFhIf/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBUARpERpAVFQRpIAjaREjpFAWKNpERbgaMtmXIw5AVszcjYA/GAAAAAAAAAAAAAAAACogAFS+AACwACxDRAICgCFFgANJER1kujF8XL6FkRhGkRGkiKqRpIJG0gKkbRlC4GrkcjLkYbA05GbkuAKCXJcD8wAAAAAAAAAAGmsl2v6GTbXRj60vhEsSskKQitQXwfwZLGqW3+mXysyXidagtvqsljdJbfVkZQ4dLCxUhYiiW3s+qJY3FZS7P3IzYtBRvfNK1ttyaq9Jfq8DaXRl2x+pgINZbU83xJYtgFDo/Nj2y+hixrcvaIgjaREjaIqpGjIuBq5lsy2S4FbIQAUXJcjYFbJcy2ZuBgAAAAAAAA0odnejIKOipPjH34eJZq0UsspSeTi9qXB9RzRC7MTKqAQMq6Udr9SfyMwapPP+mXysyi8TrpSaV73s4tZK+32l1Y+lL3F/kZj9Cou/wxtQVpNOWSTzil95Lj1mbG4bJ+qvniZsLn8IsVlL1Vu/HEzY6Q2T9VfPExYXhFiujLth9TnY6x82XbD6nOwv1CdSwsWwsZUSNKPWvzJYoG1FelHul4GtVenHun4HMly7+JjpZelH9XgZfrL9XgYbJcaNe1fn4AyCKoIRsCtmWyNkbANkBAAAA1ZcX3LxFo8Ze6vEyC6jdo+lL3V4knGza4NoydK/ny9aXxLw65gAyqoBEA0vEnf3Hs3k75OUtLY37JXqVKUOYqVNalq6142ss11n6PKFyKnoatBwlKtgq6ToYhpX17dKnO2yW9cV2Owepx9ux7uoL29x30dQVWtRpNtKrVp021tSlJJtd59X0r5O9B4KpzOK0xiKFXVU1Ccad9RtpPKD4Mo+SR37dnAqS6+4+k47kpoCFGtOjpurUqwo1JUqbjC06ii3GPmb2kjxnk95L4LS0q2Hr4mth8Wk5YZRVN0qsVHNNNX1k87J5rsYHpkd+3Zw60P5sPY3yOxaxz0dzT5/X1Evutbde/o2zvwPK+UDkvgtE8zh6OJq4jGNKWITUI0qcdXqzu3mlfJbdqCPSVv7PqjNu3uPqei+RugsTzNOOmKzxFZU481GML87K3QV4cXYuk+Q+gcJVnh8TpuvRrU3HXpyjTvHWipLZDg0wPle5+zcSxuS222XyfFGbASxLHfnFTjFqMJTmnJynFTUIqTikovK/Rbu09q2b+bxkuFH+xQX7SKwDc681lKME7J2dGlF2aun5pzdd8If26fgAuS4Uta6aV7NppKOxXtkZAoIAKCEuBWyNkbIABAAAAAAAAAAO03BtvWkrtvzU/qcQWVLHS0PSn7i/wAiNR4y91eJgDZ6M/Vy6+4BECvfPIxPV0pf/i1vjE81oDlFSxdXHaB0m9bDV8ViFg6srKVCo6smoJvZnnF7nlmnl6byB01S0fjPtFfX5vmakOhHWld2tl7Dw2ksQqtevVhfVqVqs43yerKba+JB5vFcn6ujdJUcPWz1cRSlTqJWjVp84tWa7tm53R9R5e0ND1cVGek6+Jp1+ZgkqSk482pSs8oPO7kem4XlfhsZhaNPSWv9swk1KhiYx13NKz6We+1nxsntPK6Z5QaFx9RVsSsROaioJpSj0U21kn1sD1zlbh9EQowejK+IqVnU/wDoqqlqqlqvNXis76p65oitUp1qc6EpqrGcXBwXSU08rW33PccbW0DzVXmqeI53m583dzsqlujfPZex4/kNpPBYGc8VitedeF/s9OMLpO3ntvfuXDbwtR9iwGlqtajVm8PThpmhhublCainK61ouL3wbzte18rnwDS9erVr1Z4iU5VpTk6jmulr3zv13PLy5Z4l4549S6ayULvU5q/+lb0beO068t9KYPHThisMqlPETSWJpThaLdvPUk9q2Pjk+2D8fImerpHAO7/3mG/7Yn7fKdPW0vjXd7cP/wCakeF0BjI4fFYavO+pRr0qk9VXerGabst+w78rtJQxuNxGKo6zp1XTcNdasujShF3W7OLKjxLaW8itxPYtDaQoYNTca06k6lai7ywz1acacqlqltdN31o5JqSz4K/jdP4uFfESq05TnFwpJzqX1pTjBKTTebWWTk3Liwrxtb7q4Ra/XJ/U+o6T0hjcbheSlfDUMNVxrraY+zYdUqFPDx5urTVOEYO0UoxirXzyW1ny6cb2tuVmt+1u/wCZ0eIr6tKHOVtWhKUqEdeerRlJqTcFfottJ3RB9Q8oGDxekNHaLcaOkMTiXjMXSa0hh+b0pOo6fOShTpwWdBKMnfO1lsseW8k+ioYbDU3Qq4KriNJYbFVMbL7TR53D0I0ZKjh4wburyevKWVrJZ2y+Q1tMY6pUhXnjMbOvSTVKtOvWlVppqzUZN3jdZZH5MLVrUJa9GdWjPVlHXpSlTlqtWcbp7GtwGZ0nTqTptxbg6kG4SU4tpNXUltXWjkajHVu3lk0lvd1YyBSXBLgW5m4AAgAAAAAAAAAAAAAAABpR7O9FVJ8Y+/HxLlTYygadNr0fZKL+DMCywVeICIFbh7dj+AVustHa/Vn8jMjiddI79uwqsYj9CoK6rf8AzeEZT2/zeW4G1v8A5vF0IbJdUf3IzcI1cy2LmWwo2YduBWzLIGXAyUgA3RzlFbU5Rv3nM6Yfz4evH4l+P3E+X0nOvhH3IeBOcf4fdj4GSDyvsyNa76vdj4DX7O5GQNpkXW7O5C/8sQE1QAAAAAAAAAAAAAAAFN142k12fA5nSu+k/Z8DXE6wgQGVdKLzfqz+VmS09v8ATL5WZLxOtJmkzCKmRXWnbpXvlG+TS+8lw6yqUfRl76/xMQeUvV/dElzW4mOymrOyeatnJP7yfDqMXM3JclukjdyXM3Jcita38sia/Z3R8DJC7UxvnH1e7HwHPP8AD7kPA5geV9mR059/h9yHgPtEvw+5DwOQL5/L2eM9AAMqAAAAAAAAAAAAAAAAAAAAABqbzMgCx2rtLrdS/MiIXUa1upb+JCAarQuQEG4vzuz6olyJ7ez6ohUbuQgIq3FyEApAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACggAtwQAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z',
                ],
              },
            },
          ]}
        />
      </div>
    </section>
  );
};
