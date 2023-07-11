import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portal",
    component: () => import("@/layouts/PortalLayout.vue"),
    children: [
      {
        path: "home",
        name: "HomePortal",
        component: () => import("@/components/portal/HomePortal.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/components/portal/AboutPortal.vue"),
      },
      {
        path: "faq",
        name: "Faq",
        component: () => import("@/components/portal/FaqPortal.vue"),
      },
      {
        path: "register",
        name: "Registration",
        component: () => import("@/components/portal/RegisterPortal.vue"),
      },
      {
        path: "form_register",
        name: "FormRegister",
        component: () => import("@/components/portal/FormRegistrasiPortal.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/components/portal/LoginPortal.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("@/layouts/DashboardLayout.vue"),
    name: "Dashboard",
  },
  {
    path: "/penyedia",
    component: () => import("@/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "pengadaan-baru",
        name: "PengadaanBaru",
        component: () =>
          import("@/components/penyedia/pengadaan/PengadaanBaru.vue"),
      },
      {
        path: "daftar-pengadaan",
        name: "DaftarPengadaan",
        component: () =>
          import("@/components/penyedia/pengadaan/DaftarPengadaan.vue"),
      },
      {
        path: "reverse-action",
        name: "reverseaction",
        component: () =>
          import("@/components/penyedia/pengadaan/ReverseAction.vue"),
      },
      {
        path: "history-reverse-action",
        name: "HistoryReverseaction",
        component: () =>
          import("@/components/penyedia/pengadaan/HistoryReverseAction.vue"),
      },
      {
        path: "pengumuman-dpt",
        name: "PengumumanDpt",
        component: () =>
          import("@/components/penyedia/dptpenyedia/PengumumanDpt.vue"),
      },
      {
        path: "daftar-dpt",
        name: "DaftarDpt",
        component: () =>
          import("@/components/penyedia/dptpenyedia/DaftarDpt.vue"),
      },
      {
        path: "proses-dpt",
        name: "ProsesDpt",
        component: () =>
          import("@/components/penyedia/dptpenyedia/ProsesDpt.vue"),
      },
      {
        path: "cancel-dpt",
        name: "CancelDpt",
        component: () =>
          import("@/components/penyedia/dptpenyedia/CancelDpt.vue"),
      },
      {
        path: "identitas",
        name: "Identitas",
        component: () =>
          import("@/components/penyedia/datapenyedia/Identitas.vue"),
      },
      {
        path: "ijin-usaha",
        name: "IjinUsaha",
        component: () =>
          import("@/components/penyedia/datapenyedia/IjinUsaha.vue"),
      },
      {
        path: "akta",
        name: "Akta",
        component: () => import("@/components/penyedia/datapenyedia/Akta.vue"),
      },
      {
        path: "pengurus",
        name: "Pengurus",
        component: () =>
          import("@/components/penyedia/datapenyedia/Pengurus.vue"),
      },
      {
        path: "bank",
        name: "Bank",
        component: () => import("@/components/penyedia/datapenyedia/Bank.vue"),
      },
      {
        path: "pemilik",
        name: "Pemilik",
        component: () =>
          import("@/components/penyedia/datapenyedia/Pemilik.vue"),
      },
      {
        path: "tenaga-ahli",
        name: "TenagaAhli",
        component: () =>
          import("@/components/penyedia/datapenyedia/TenagaAhli.vue"),
      },
      {
        path: "pengalaman",
        name: "Pengalaman",
        component: () =>
          import("@/components/penyedia/datapenyedia/Pengalaman.vue"),
      },
      {
        path: "peralatan",
        name: "Peralatan",
        component: () =>
          import("@/components/penyedia/datapenyedia/Peralatan.vue"),
      },
      {
        path: "pekerjaan-ongoing",
        name: "PekerjaanOngoing",
        component: () =>
          import("@/components/penyedia/datapenyedia/PekerjaanOngoing.vue"),
      },
      {
        path: "neraca",
        name: "Neraca",
        component: () =>
          import("@/components/penyedia/datapenyedia/Neraca.vue"),
      },
      {
        path: "pajak",
        name: "Pajak",
        component: () => import("@/components/penyedia/datapenyedia/Pajak.vue"),
      },
      {
        path: "rating",
        name: "Rating",
        component: () =>
          import("@/components/penyedia/datapenyedia/Rating.vue"),
      },
    ],
  },
  {
    path: "/ekhs",
    component: () => import("@/layouts/DashboardLayout.vue"),
    children: [
      {
        path: "order-masuk",
        name: "OrderMasuk",
        component: () => import("@/components/penyedia/ekhs/OrderMasuk.vue"),
      },
      {
        path: "daftar-order",
        name: "DaftarOrder",
        component: () => import("@/components/penyedia/ekhs/DaftarOrder.vue"),
      },
      {
        path: "daftar-perjanjian-rinci",
        name: "DaftarPerjanjianRinci",
        component: () =>
          import("@/components/penyedia/ekhs/DaftarPerjanjianRinci.vue"),
      },
      {
        path: "amandemen-perjanjian-umum",
        name: "AmandemenPerjanjianUmum",
        component: () =>
          import("@/components/penyedia/ekhs/AmandemenPerjanjianUmum.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
