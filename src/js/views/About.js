import View from "./View";

export default class extends View {
  static getHtml() {
    return `
      <main class="main about">
        <section class="about__hero">
          <div>
            <p class="about__hero--title">
              Accessible giving infrastructure to help every person and
              organization use technology for good.
            </p>

            <p class="about__hero--subtitle">
              Every.org is a 501(c)(3) charity supported entirely by donations.
            </p>
          </div>
        </section>

        <section class="container about__team">
          <p class="about__team--title">Team</p>

          <p class="about__team--subtitle">
            We're a global, fully remote team that wants to help high-impact
            nonprofits get the unrestricted, recurring funding needed to focus
            on their work. If you have a passion for helping nonprofits and
            givers, contact us at
            <a href="mailto:team@every.org">team@every.org.</a>
          </p>

          <div class="about__team--members">
            <div class="about__team--member">
              <img src="./src/images/emin.jpg" alt="Emin Aliyev" />
              <p class="about__team--member--name">Emin Aliyev</p>
              <p class="about__team--member--position">Developer</p>
            </div>

            <div class="about__team--member">
              <img src="./src/images/nisanur.jpg" alt="Nisanur Guvensoy" />
              <p class="about__team--member--name">Nisanur Guvensoy</p>
              <p class="about__team--member--position">Developer</p>
            </div>

            <div class="about__team--member">
              <img src="./src/images/sadik.jpg" alt="Sadik Solmaz" />
              <p class="about__team--member--name">Sadik Solmaz</p>
              <p class="about__team--member--position">Developer</p>
            </div>
          </div>
        </section>
      </main>
    `;
  }
}
