module.exports = () => ({
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms : {
        wrapBodyWithDataKey: true
      },
    }
  },
  "models-relation-diagram": {
    enabled: true,
    config: {
      defaultExcludeAdmin: true, // hide admin:: + strapi:: + webhook + plugin::i18n.locale + plugin::content-releases
      defaultHideUpload: true, // hide plugin::upload.file + plugin::upload.folder
      defaultExcludeComponents: false, // hide components
      defaultLayout: 'dagre', // default layout: ELK,Dagre
      defaultEdgesType: 'step', // default edge type: straight,step,smoothstep,bezier
      hideMarkers: true, // hide relation marker on edges
    }
  },
});
