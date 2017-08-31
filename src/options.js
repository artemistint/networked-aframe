var options = {
  debug: false,
  updateRate: 15, // How often network components call `sync`
  compressSyncPackets: false, // compress network component sync packet json
  useLerp: true, // when networked entities are created the aframe-lerp-component is attached to the root
  collisionOwnership: true, // whether for networked-share, we take ownership when needed upon physics collision
};

module.exports = options;
