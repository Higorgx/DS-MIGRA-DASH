import { defineStore } from "pinia";

export const useNotificationStore = defineStore({
  id: "notification-store",
  state: () => {
    return {
      type: null,
      message: null,
    };
  },
  actions: {
    success(state, message) {
      state.type = "alert-success";
      state.message = message;
    },
    error(state, message) {
      state.type = "alert-danger";
      state.message = message;
    },
    clear(state) {
      state.type = null;
      state.message = null;
    },
    success({ commit }, message) {
      commit("success", message);
    },
    error({ commit }, message) {
      commit("error", message);
    },
    clear({ commit }) {
      commit("clear");
    },
  },

  // Getter function for currentUser
  get type() {
    return this.state;
  },

  // Setter function for currentUser
  set type(value) {
    this.state = value;
  },
  // Getter function for currentUser
  get message() {
    return this.state;
  },

  // Setter function for currentUser
  set message(value) {
    this.state = value;
  },
});
