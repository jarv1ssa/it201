import View from "./View";

export default class extends View {
  static getHtml() {
    return `
      <main class="main home">
        <div class="container">
          <div class="row">
            <div class="col-12 md:col-6 home__left">
              <p class="home__left--title">
                Your trusted network for doing good
              </p>

              <p class="home__left--subtitle">
                Built by a nonprofit. Forever free.
              </p>

              <p class="home__left--description">
                Explore, donate, and share. Over one million registered
                charities.
              </p>
            </div>

            <div class="home__right col-12 md:col-6">
              <img
                src="./src/images/onboarding.svg"
                alt="Onboarding"
                class="home__right--image"
              />
            </div>
          </div>
        </div>
      </main>
    `;
  }
}
