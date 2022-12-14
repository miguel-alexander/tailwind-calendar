import Mock from "../mock";

const dataDB = {
  prefix: "https://storage0.mysite.com/",
  basicInfo: {
    account_name: "Sandy Hill Farm",
    account_url_name: "sandyhill",
    account_id: "djea92xw",
    display_name: null,
    location: "Still Pond Maryland",
    website: null,
    tagline: null,
    logo_w: null,
    logo_h: null,
    logo_id: null,
    camera_id: "ho2fplz0",
    camera_url_name: "barns",
    camera_name: "Barns",
    camera_type: 0,
    camera_description: null,
    camera_timezone: "America/Chicago",
    camera_lat_long: null,
    camera_grouping: 5,
    clip_begin: null,
    clip_duration: null,
    nx_enabled: null,
    nx_video: null,
    selfies: null,
    visibility: 1,
    camera_what_to_display: null,
    access_role: null,
    favorited: null,
    camera_time: "2022-08-29T11:00:10.960Z",
    tl_dt: "2022-08-29T00:00:00.000Z",
    ev_dt: "2022-08-29T00:00:00.000Z",
    se_dt: null,
    ph_dt: null,
    th_dt: null,
    lp_dt: null,
    gu_dt: null,
    utc_offset: -18000,
  },
  month: "2022-08",
  ms: 76,
  data: {
    "2022-08": {
      1: {
        tl: 288,
        ev: 129,
      },
      2: {
        tl: 288,
        ev: 121,
      },
      3: {
        tl: 288,
        ev: 83,
      },
      4: {
        tl: 288,
        ev: 63,
      },
      5: {
        tl: 286,
        ev: 24,
      },
      6: {
        tl: 288,
        ev: 115,
      },
      7: {
        tl: 288,
        ev: 30,
      },
      8: {
        tl: 288,
        ev: 111,
      },
      9: {
        tl: 288,
        ev: 25,
      },
      10: {
        tl: 288,
        ev: 111,
      },
      11: {
        tl: 288,
        ev: 118,
      },
      12: {
        tl: 288,
        ev: 66,
      },
      13: {
        tl: 288,
        ev: 73,
      },
      14: {
        tl: 288,
        ev: 40,
      },
      15: {
        tl: 288,
        ev: 23,
      },
      16: {
        tl: 288,
        ev: 21,
      },
      17: {
        tl: 288,
        ev: 23,
      },
      18: {
        tl: 288,
        ev: 13,
      },
      19: {
        tl: 288,
        ev: 31,
      },
      20: {
        tl: 288,
        ev: 60,
      },
      21: {
        tl: 288,
        ev: 23,
      },
      22: {
        tl: 206,
        ev: 37,
      },
      23: {
        tl: 102,
        ev: 17,
      },
      24: {
        tl: 288,
        ev: 63,
      },
      25: {
        tl: 287,
        ev: 39,
      },
      26: {
        tl: 288,
        ev: 55,
      },
      27: {
        tl: 288,
        ev: 20,
      },
      28: {
        tl: 288,
        ev: 53,
      },
      29: {
        tl: 144,
        ev: 37,
      },
      prev: "2022-07-31",
    },
    first: "2022-04-01",
    last: "2022-08-29",
  },
};

Mock.onGet("/api/data").reply((config) => {
  return [200, dataDB];
});
