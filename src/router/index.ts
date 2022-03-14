import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // 面试汇总
  {
    path: "/list",
    name: "list",
    redirect: '/list/list-a',
    component: () => import("../views/ListView.vue"),
    children: [
      {
        path: 'list-a',
        name: 'list-a',
        component: () => import('../components/List/a.vue')
      },
      {
        path: 'list-b',
        name: 'list-b',
        component: () => import('../components/List/b.vue')
      },
      {
        path: 'list-c',
        name: 'list-c',
        component: () => import('../components/List/c.vue')
      },
      {
        path: 'list-d',
        name: 'list-d',
        component: () => import('../components/List/d.vue')
      },
      {
        path: 'list-e',
        name: 'list-e',
        component: () => import('../components/List/e.vue')
      },
      {
        path: 'list-f',
        name: 'list-f',
        component: () => import('../components/List/f.vue')
      },
      {
        path: 'list-g',
        name: 'list-g',
        component: () => import('../components/List/g.vue')
      },
      {
        path: 'list-h',
        name: 'list-h',
        component: () => import('../components/List/h.vue')
      },
      {
        path: 'list-i',
        name: 'list-i',
        component: () => import('../components/List/i.vue')
      },
      {
        path: 'list-j',
        name: 'list-j',
        component: () => import('../components/List/j.vue')
      },
      {
        path: 'list-k',
        name: 'list-k',
        component: () => import('../components/List/k.vue')
      },
      {
        path: 'list-l',
        name: 'list-l',
        component: () => import('../components/List/l.vue')
      },
      {
        path: 'list-m',
        name: 'list-m',
        component: () => import('../components/List/m.vue')
      },
      {
        path: 'list-n',
        name: 'list-n',
        component: () => import('../components/List/n.vue')
      },
      {
        path: 'list-o',
        name: 'list-o',
        component: () => import('../components/List/o.vue')
      },
      {
        path: 'list-p',
        name: 'list-p',
        component: () => import('../components/List/p.vue')
      },
      {
        path: 'list-q',
        name: 'list-q',
        component: () => import('../components/List/q.vue')
      },
      {
        path: 'list-r',
        name: 'list-r',
        component: () => import('../components/List/r.vue')
      },
      {
        path: 'list-s',
        name: 'list-s',
        component: () => import('../components/List/s.vue')
      },
      {
        path: 'list-t',
        name: 'list-t',
        component: () => import('../components/List/t.vue')
      },
      {
        path: 'list-u',
        name: 'list-u',
        component: () => import('../components/List/u.vue')
      },
      {
        path: 'list-v',
        name: 'list-v',
        component: () => import('../components/List/v.vue')
      },
      {
        path: 'list-w',
        name: 'list-w',
        component: () => import('../components/List/w.vue')
      },
    ],
  },
  // ts
  {
    path: "/tsview",
    name: "tsview",
    component: () => import("../views/TsView.vue"),
    children: [
      {
        path: 'ts-a',
        name: 'tsa',
        component: () => import('../components/TS/a.vue')
      },
      {
        path: 'ts-b',
        name: 'tsb',
        component: () => import('../components/TS/b.vue')
      },
      {
        path: 'ts-c',
        name: 'ts-c',
        component: () => import('../components/TS/c.vue')
      },
      {
        path: 'ts-d',
        component: () => import('../components/TS/d.vue')
      },
      {
        path: 'ts-e',
        component: () => import('../components/TS/e.vue')
      },
      {
        path: 'ts-f',
        component: () => import('../components/TS/f.vue')
      },
      {
        path: 'ts-g',
        component: () => import('../components/TS/g.vue')
      },
      {
        path: 'ts-h',
        component: () => import('../components/TS/h.vue')
      },
      {
        path: 'ts-i',
        component: () => import('../components/TS/i.vue')
      },
      {
        path: 'ts-j',
        component: () => import('../components/TS/j.vue')
      },
      {
        path: 'ts-k',
        component: () => import('../components/TS/k.vue')
      },
      {
        path: 'ts-l',
        component: () => import('../components/TS/l.vue')
      },
    ],
  },
  // vite
  {
    path: "/vite",
    name: "vite",
    component: () => import("../views/ViteView.vue"),
    children: [],
  },
  // vue3+面试题
  {
    path: '/vue',
    name: 'vue',
    component: () => import("../views/Vue3View.vue"),
    children: [],
  },

  // html+css
  {
    path: '/hcss',
    name: 'hcss',
    component: () => import("../views/HCss.vue"),
    children: [],
  },
  // http
  {
    path: '/http',
    name: 'http',
    component: () => import("../views/HttpView.vue"),
    children: [],
  },
  // 性能
  {
    path: '/pre',
    name: 'pre',
    component: () => import("../views/PreView.vue"),
    children: [],
  },
  // js
  {
    path: "/js",
    name: "js",
    component: () => import("../views/JsView.vue"),
    children: [
      {
        path: 'js-a',
        name: 'js-a',
        component: () => import('../components/JS/a.vue')
      },
      {
        path: 'js-b',
        name: 'js-b',
        component: () => import('../components/JS/b.vue')
      },
      {
        path: 'js-c',
        name: 'js-c',
        component: () => import('../components/JS/c.vue')
      },
      {
        path: 'js-d',
        name: 'js-d',
        component: () => import('../components/JS/d.vue')
      },
      {
        path: 'js-e',
        name: 'js-e',
        component: () => import('../components/JS/e.vue')
      },
      {
        path: 'js-f',
        name: 'js-f',
        component: () => import('../components/JS/f.vue')
      },
      {
        path: 'js-g',
        name: 'js-g',
        component: () => import('../components/JS/g.vue')
      },
      {
        path: 'js-h',
        name: 'js-h',
        component: () => import('../components/JS/h.vue')
      },
      {
        path: 'js-i',
        name: 'js-i',
        component: () => import('../components/JS/i.vue')
      },
      {
        path: 'js-j',
        name: 'js-j',
        component: () => import('../components/JS/j.vue')
      },
      {
        path: 'js-k',
        name: 'js-k',
        component: () => import('../components/JS/k.vue')
      },
    ],
  },
  // note
  {
    path: "/note",
    name: "note",
    component: () => import("../views/NoteView.vue"),
    children: [
      {
        path: "note-a",
        name: 'note-a',
        component: () => import('../components/Note/a.vue')
      },
      {
        path: "note-b",
        name: 'note-b',
        component: () => import('../components/Note/b.vue')
      },
      {
        path: "note-c",
        name: 'note-c',
        component: () => import('../components/Note/c.vue')
      },
      {
        path: "note-d",
        name: 'note-d',
        component: () => import('../components/Note/d.vue')
      },
      {
        path: "note-e",
        name: 'note-e',
        component: () => import('../components/Note/e.vue')
      },
      {
        path: "note-f",
        name: 'note-f',
        component: () => import('../components/Note/f.vue')
      },
      {
        path: "note-g",
        name: 'note-g',
        component: () => import('../components/Note/g.vue')
      },
      {
        path: "note-h",
        name: 'note-h',
        component: () => import('../components/Note/h.vue')
      },
      {
        path: "note-i",
        name: 'note-i',
        component: () => import('../components/Note/i.vue')
      },
      {
        path: "note-j",
        name: 'note-j',
        component: () => import('../components/Note/j.vue')
      },
      {
        path: "note-k",
        name: 'note-k',
        component: () => import('../components/Note/k.vue')
      },
      {
        path: "note-l",
        name: 'note-l',
        component: () => import('../components/Note/L.vue')
      },
      {
        path: "note-m",
        name: 'note-m',
        component: () => import('../components/Note/M.vue')
      },
      {
        path: "note-n",
        name: 'note-n',
        component: () => import('../components/Note/N.vue')
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
