<script>
import { required, email, helpers } from "@vuelidate/validators";
import appConfig from "~/app.config";
import axios from "axios";
// import { useNotificationStore } from "~/stores/notification";
// import nuxtStorage from "nuxt-storage";

// import { authMethods, authFackMethods, notificationMethods } from "@/state/helpers";

// definePageMeta({
//     auth: {
//         unauthenticatedOnly: true,
//         navigateAuthenticatedTo: '/',
//     }
// })
// const { signIn } = useAuth()
definePageMeta({
  layout: "custom"
});
export default {
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description
      }
    ]
  },
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      processing: false
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email)
    },
    password: {
      required: helpers.withMessage("Password is required", required)
    }
  },
  beforeCreate() {
    document.documentElement.setAttribute("data-theme", "default");
  },
  methods: {
    async signinapi() {
      try {
        this.processing = true;
        const { data } = await axios.post(
          "https://api-node.themesbrand.website/auth/signin",
          {
            email: this.email,
            password: this.password
          }
        );
        const user = data.data;
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push({
          path: "/"
        });
      } catch (error) {
        console.error("failed at signinapi", { error });
      } finally {
        this.processing = false;
      }
    },

    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {}
  }
};
</script>

<template>
  <section
    class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100"
  >
    <BContainer>
      <BRow class="justify-content-center">
        <BCol lg="11">
          <BCard no-body class="mb-0">
            <BRow class="g-0 align-items-center">
              <BCol xxl="11" class="mx-auto">
                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                  <BCardBody class="p-sm-5 m-lg-4">
                    <div class="text-center mt-5">
                      <h5 class="fs-3xl">Bem vindo de volta!</h5>
                      <p class="text-muted">Faça o login para entrar no Migra Dash</p>
                    </div>
                    <div class="p-2 mt-5">
                      <BAlert
                        v-model="authError"
                        variant="danger"
                        class="mt-3"
                        dismissible
                        >{{ authError }}</BAlert
                      >

                      <form @submit.prevent="tryToLogIn">
                        <div class="mb-3">
                          <label for="username" class="form-label"
                            >Usuário <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <input
                              type="email"
                              class="form-control password-input"
                              id="username"
                              placeholder="Usuário"
                              v-model="email"
                              required
                            />
                          </div>
                        </div>

                        <div class="mb-3">
                          <div class="float-end">
                            <nuxt-link to="/forgot-password" class="text-muted"
                              >Esqueceu a senha?</nuxt-link
                            >
                          </div>
                          <label class="form-label" for="password-input"
                            >Senha <span class="text-danger">*</span></label
                          >
                          <div
                            class="position-relative auth-pass-inputgroup mb-3"
                          >
                            <input
                              type="password"
                              v-model="password"
                              class="form-control pe-5 password-input"
                              placeholder="Senha"
                              id="password-input"
                              required
                            />
                            <BButton
                              variant="link"
                              class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="password-addon"
                              ><i class="ri-eye-fill align-middle"></i
                            ></BButton>
                          </div>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <label
                            class="form-check-label"
                            for="auth-remember-check"
                            >Lembrar</label
                          >
                        </div>

                        <div class="mt-4">
                          <BButton
                            variant="primary"
                            class="w-100"
                            type="submit"
                            @click="signinapi"
                            :disabled="processing"
                            >{{
                              processing ? "Aguarde" : "Entrar"
                            }}</BButton
                          >
                        </div>
                      </form>
                      <div class="text-center mt-5">
                        <p class="mb-0">
                          Não tem uma conta?
                          <nuxt-link
                            to="/register"
                            class="fw-semibold text-secondary text-decoration-underline"
                          >
                          Se inscreva!</nuxt-link
                          >
                        </p>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>
