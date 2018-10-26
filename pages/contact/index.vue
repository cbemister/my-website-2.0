<template>
  <div class="container">
    <h1 class="title">
      Contact
    </h1>
    <div class="content">
      <form name="contact-page" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thank-you/" method="post">
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
        <p class="hidden">     
            <label>Don’t fill this out: 
                <input name="bot-field">
            </label>
        </p>
      </form>
    </div>
  </div>
</template>

<style>

.hidden {
  display: none;
}

</style>