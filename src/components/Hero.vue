<template>
    <div class="hero-section">
      <section class="hero background-img is-large" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)' }">
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-size-1 has-text-white">
              Let's Exchange!
            </h1>
            <h2 class="subtitle has-text-light">
              Products and Services we can exchange together
            </h2>
          </div>
        </div>
      </section>
      <div class="search-lookup-wrap">
        <div class="search-lookup centered">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <span>Search For</span>
              </div>
              <div class="level-item">
                <input type="text"
                       class="input"
                       placeholder="Driller">
              </div>
              <div class="level-item">
                <button class="button">Search</button>
              </div>
              <div class="level-item">
                <span>Searching "Driller"</span>
              </div>
              <div class="level-item">
                <span>With tag of</span>
              </div>
              <div class="level-item">
                <button class="button is-danger">Art</button>
              </div>
            </div>
            <!-- <div class="level-right">
              <div class="level-item">
                <button class="button is-medium">Search</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
</template>