import View from "./View";

export default class extends View {
  static getHtml() {
    return `
      <section class="about__hero">
        <div>
          <p class="about__hero--title">
            Help others without any reason and give without the expectation of receiving anything in return.
          </p>

          <p class="about__hero--subtitle">
            We aim to make a difference in the nonprofit community.
          </p>
        </div>
      </section>

      <section class="container about__team">
        <p class="about__team--title">Team</p>

        <p class="about__team--subtitle">
          We are a team of university students that wants to ease the access
          to a variety of nonprofits and charities to help nonprofits and givers.
          If you have a passion for helping nonprofits and
          givers, contact us at
          <a href="mailto:team@example.com">team@example.com.</a>
        </p>

        <div class="about__team--members">
          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Emin Aliyev</p>
            <p class="about__team--member--position">Developer</p>
          </div>

          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Nisanur Guvensoy</p>
            <p class="about__team--member--position">Developer</p>
          </div>

          <div class="about__team--member">
            <i class="far fa-user"></i>
            <p class="about__team--member--name">Sadik Solmaz</p>
            <p class="about__team--member--position">Developer</p>
          </div>
        </div>
      </section>
    `;
  }
}
