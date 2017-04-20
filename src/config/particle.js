export default {
  particles: {
    number: { value: 40},
    line_linked: {
      shadow: {
        enable: false,
        color: "#3CA9D1",
        blur: 5
      },
      opacity: 0.3
    },
    size: {
      random: true,
      value: 4
    },
    opacity: {
      value: 0.3
    }
  },
  retina_detect: true,
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    }
  }
}