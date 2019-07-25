const settingsConfig = {
  layout: {
    style: 'layout1', // layout-1 layout-2 layout-3
    config: {
      footer: {
        display: true,
        style: 'fixed',
        position: 'below',
      },
    }, // checkout layout configs at app/fuse-configs/layout-1/Layout1Config.js
  },
  customScrollbars: true,
  theme: {
    main: 'default',
    navbar: 'mainThemeDark',
    toolbar: 'mainThemeLight',
    footer: 'mainThemeDark',
  },
}

export default settingsConfig
