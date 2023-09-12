// import { Lightning, Utils, Log } from "@lightningjs/sdk";
// import { Device} from "@firebolt-js/sdk";

// import { MyButton } from "./MyButton";


// export  class App extends Lightning.Component {
//   static getFonts() {
//     return [
//       { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
//     ];
//   }

//   static _template() {
//     return {
//       HelloWorld: {
//         w: 1920,
//         h: 1080,
//         y: 0,
//         rect: true,
//         color: 0xffffffff,
//         src: Utils.asset('images/dark9.jpg'),
        
//         FireboltStatus: {
         
//           Rdklogo: {
//             x: 70,
//             y: 50,
//             w: 300,
//             h: 100,
//             zIndex: 10,
//             shadowColor: 0xffff00ff,
//             src: Utils.asset("images/rdk-logo.gif"),
//           },
//           Alexalogo: {
//             x: 1050,
//             y: 5,
//             w: 150,
//             h: 150,
//             src: Utils.asset("images/alexa.png"),
//           },
         
//           Belllogo: {
//             x: 1250,
//             y: 30,
//             w: 100,
//             h: 100,
//             src: Utils.asset("images/sett.png"),
//           },
//           Notifilogo: {
//             x: 1450,
//             y: 30,
//             w: 100,
//             h: 100,
//             src: Utils.asset("images/noti.png"),
//           },
//           CurrentTime: {
//             mountX: 0.5,
//             x: 1700,
//             y: 40,
//             w: 200,
//             h: 100,// Adjust the Y position as needed
//             text: {
//               text: "",
//               fontFace: "Regular",
//               fontSize: 70,
//               textColor: 0xff09f676,
//             },
//           },
//           Device: {
//             mountX: 0.5,
//             x: 960,
//             y: 1000,
//             text: {
//              // text: "Device not Ready!",

//               fontFace: "Regular",
//               fontSize: 35,
//               textColor: 0xff09f676,
//             },
//           },
//       },
//         Playbutton: {
//           type: MyButton,
//           mount: -0.2,
//           x: 115,
//           y: 130,
//           text: {
//             text: "Recent",
//             fontFace: 'Regular',
//             fontSize: 45,
//             textColor: 0xffffffff,
//           },
//           signals: {
//             onClick: "$onItemSelect(obj)",
//           },
//         },
//       },
//       Slider: {
//         w: 800,
//         h: 350,
//         x: 480,
//         y: 350,
//         mount: 0.5,
//         Wrapper: {
          
//         },
        
//       },
//       SecondSlider: {
//         w: 800,
//         h: 350,
//         x: 480,
//         y: 750, // Adjust the Y position for the second slider
//         mount: 0.5,
//         Wrapper: {},
//       },
//       VideoSection: {
//         alpha: 1,
//         x: 0,
//         y: 0,
//         w: 1920,
//         h: 1080,
//         color: "0xff000000",
//         rect: true,
//         visible: false,
//         HelpMsg: {
//           x: 80,
//           y: 50,
//           w: 1920,
//           text: {
//             text: "Play the Video using AAMP Player",
//             fontSize: 40,
//             fontFace: "Regular",
//             textAlign: "center",
//             lineHeight: 50,
//           },
//           color: "0xffffffff",
//           alpha: 1,
//         },
//         Video: {
//           x: 0,
//           y: 0,
//           w: 1920, // Set to your desired width
//           h: 1080, // Set to your desired height
//           type: Lightning.components.VideoItem, // Use the appropriate Lightning video
//         },
//       },
//     };
//   }
//   _getFocused() {
//     return this.tag("Playbutton");
//   }

//   _init() {

//     // new code 

//     this.index = 0;
//   this.dataLength = 5;
//   this.currentSlider = "slider1"; // This keeps track of the current slider

//   // Create buttons for the first slider
//   const sliderButtons = [];
//   for (let i = 0; i < this.dataLength; i++) {
//     sliderButtons.push({ type: MyButton, x: i * (300 + 30), item: { label: `Train`, src: Utils.asset(`images/cardImage${i + 1}.jpg`) } });
//   }
//   this.tag('Slider').children = sliderButtons;

//   // Create buttons for the second slider
//   const secondSliderButtons = [];
//   for (let i = 0; i < this.dataLength; i++) {
//     secondSliderButtons.push({ type: MyButton, x: i * (300 + 30), item: { label: `Train`, src: Utils.asset(`images/cardImage${i + 6}.jpg`) } });
//   }
//   this.tag('SecondSlider').children = secondSliderButtons;

//   // Set the initial focus
//     this._setSliderFocus();
//     this._updateCurrentTime();

    
//   // Update the time every second (1000 milliseconds)
//   setInterval(() => {
//     this._updateCurrentTime();
//   }, 1000);
    
//   }

//   _setSliderFocus() {
//     if (this.currentSlider === 'slider1') {
//       this.tag('Slider').setSmooth('alpha', 1);
//       this.tag('SecondSlider').setSmooth('alpha', 0);
//       this.tag('Slider').children[this.index].setFocus(true);
//     } else if (this.currentSlider === 'slider2') {
//       this.tag('Slider').setSmooth('alpha', 0);
//       this.tag('SecondSlider').setSmooth('alpha', 1);
//       this.tag('SecondSlider').children[this.index].setFocus(true);
//     }
//   }
  

//   $onItemSelect(obj) {
   
//     const url = 'https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)';
//     this._player = new AAMPMediaPlayer();
//     this._player.load(url);
//     this._setState("VideoPlay");


//   }
  

//   _updateCurrentTime() {
//     const currentTime = new Date();
//     const hours = currentTime.getHours().toString().padStart(2, "0");
//     const minutes = currentTime.getMinutes().toString().padStart(2, "0");
//     const seconds = currentTime.getSeconds().toString().padStart(2, "0");
//     const formattedTime = `${hours}:${minutes}`;
//     this.tag("CurrentTime").text.text = `${formattedTime}`;
//   }
  
//   repositionWrapper() {
//     const wrapper = this.tag('Wrapper');
//     const sliderW = this.tag('Slider').w;
//     const currentWrapperX = wrapper.transition('x').targetvalue || wrapper.x;
//     const currentFocus = wrapper.children[this.index];
//     const currentFocusX = currentFocus.x + currentWrapperX;
//     const currentFocusOuterWidth = currentFocus.x + currentFocus.w;

//     if (currentFocusX < 0) {
//       wrapper.setSmooth('x', - currentFocus.x);
//     }
//     else if (currentFocusOuterWidth > sliderW) {
//       wrapper.setSmooth('x', sliderW - (currentFocusOuterWidth));
//     }
//   }

//   _handleLeft() {
//     const slider = this.currentSlider === 'slider1' ? this.tag('Slider') : this.tag('SecondSlider');
//     if (this.index > 0) {
//       this.index--;
//       slider.children[this.index].setFocus(true);
//       slider.children[this.index + 1].setFocus(false);
//     }
//   }
  
//   _handleRight() {
//     const slider = this.currentSlider === 'slider1' ? this.tag('Slider') : this.tag('SecondSlider');
//     if (this.index < this.dataLength - 1) {
//       this.index++;
//       slider.children[this.index].setFocus(true);
//       slider.children[this.index - 1].setFocus(false);
//     }
//   }
  
  
  
//   _handleUp() {
//     if (this.currentSlider === 'slider2') {
//       this.currentSlider = 'slider1';
//       this._setSliderFocus();
//     }
//   }
  
//   _handleDown() {
//     if (this.currentSlider === 'slider1') {
//       this.currentSlider = 'slider2';
//       this._setSliderFocus();
//     }
//   }
  
  

// _getSliderFocused() {
//   return this.tag('Slider.Wrapper').children[this.index];
// }
    


//   static _states() {
//     return [
//       class LaunchView extends this {
//         _getFocused() {
//           return this.tag("Playbutton");
//         }
       
//       },
//       class SecondSliderState extends this {
//         _getFocused() {
//           if (this.currentSlider === "slider1") {
//             return this.tag("Slider.Wrapper").children[this.index];
//           } else {
//             return this.tag("SecondSlider.Wrapper").children[this.index];
//           }
//         }
        
//       },
//       class VideoPlay extends this {
//         _getFocused() {
//           return this.tag("Video");
//         }
//         $enter() {
//           this.tag("Video").visible = true;
//           this.tag("HelloWorld").visible = false;
//           this.tag("Slider").visible = false;
//         }
//         _handleBack() {
//           console.log("back to launchView");
//           this.tag("Video").visible = false;
         
//           this.tag("HelloWorld").visible = true;
//           this.tag("Slider").visible = true;
          
//           this._setState("LaunchView");
//           if (this._player) {

//             this._player.stop();

//             this._player = null;

//           }
//         }
//       },
//     ];
//   }

//   _active() {
//     console.log("active set state to launchView");
//     this._setState("LaunchView");

   

//     Device.version().then((version) => {
//       const deviceVersion =
//         "version:" +
//         version.sdk.readable +
//         " : v" +
//         version.sdk.major +
//         "." +
//         version.sdk.minor +
//         "." +
//         version.sdk.patch;
//       Log.info(deviceVersion);
//       this.tag("Device").text.text += deviceVersion;
//     });
//   }
// }





///// pure new 

import { Lightning, Utils, Log } from "@lightningjs/sdk";
import { Device } from "@firebolt-js/sdk";
import { MyButton } from "./MyButton";

export class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      HelloWorld: {
        w: 1920,
        h: 1080,
        y: 0,
        rect: true,
        color: 0xff000000,
       // src: Utils.asset("images/dark9.jpg"),

        FireboltStatus: {
          Rdklogo: {
            x: 70,
            y: 50,
            w: 300,
            h: 65,
            zIndex: 10,
            shadowColor: 0xffff00ff,
            src: Utils.asset("images/RDK-Logo-web.webp"),
          },
          Alexalogo: {
            x: 1050,
            y: 5,
            w: 170,
            h: 150,
            src: Utils.asset("images/alexa.png"),
          },

          Belllogo: {
            x: 1285
            ,
            y: 30,
            w: 90,
            h: 90,
            src: Utils.asset("images/sett.png"),
          },
          Notifilogo: {
            x: 1450,
            y: 30,
            w: 100,
            h: 100,
            src: Utils.asset("images/noti.png"),
          },
          CurrentTime: {
            mountX: 0.5,
            x: 1700,
            y: 40,
            w: 200,
            h: 100, // Adjust the Y position as needed
            text: {
              text: "",
              fontFace: "Regular",
              fontSize: 70,
              //textColor: 0xff09f676,
            },
          },
          Text1: {
          
            x: 100,
            y: 610,
            w: 500,
            h: 80,
            text: {
              text: "Featured Video on Demand",
              fontFace: "Regular",
              fontSize: 30,
              //textColor: 0xff09f676,
            }
          },
           Text2: {
            x: 100,
            y: 200,
            w: 500,
            h: 80,
            text: {
              text: "Recommended Videos",
              fontFace: "Regular",
              fontSize: 30,
              //textColor: 0xff09f676,
            }
          },
          Device: {
            mountX: 0.5,
            x: 960,
            y: 1030,
            text: {
              // text: "Device not Ready!",
              fontFace: "Regular",
              fontSize: 24,
              //textColor: 0xff09f676,
            },
          },
        },
        Playbutton: {
          type: MyButton,
          mount: -0.2,
          x: 115,
          y: 130,
          text: {
            //text: "Recent",
            fontFace: "Regular",
            fontSize: 45,
            textColor: 0xffffffff,
          },
          signals: {
            onClick: "$onItemSelect",
          },
        },
      },
      Slider: {
        w: 800,
        h: 350,
        x: 480,
        y: 350,
        mount: 0.5,
        Wrapper: {},
      },
      SecondSlider: {
        w: 800,
        h: 350,
        x: 480,
        y: 750, // Adjust the Y position for the second slider
        mount: 0.5,
        SecondWrapper: {},
      },
      VideoSection: {
        alpha: 1,
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        color: "0xff000000",
        rect: true,
        visible: false,
        HelpMsg: {
          x: 80,
          y: 50,
          w: 1920,
          text: {
            text: "Play the Video using AAMP Player",
            fontSize: 40,
            fontFace: "Regular",
            textAlign: "center",
            lineHeight: 50,
          },
          color: "0xffffffff",
          alpha: 1,
        },
        Video: {
          x: 0,
          y: 0,
          w: 1920, // Set to your desired width
          h: 1080, // Set to your desired height
          type: Lightning.components.VideoItem, // Use the appropriate Lightning video
        },
      },
    };
  }

  _getFocused() {
    return this.tag("Playbutton");
  }

  _init() {
    // New code
    this.index = 0;
    this.dataLength = 5;
    this.currentSlider = "slider1"; // This keeps track of the current slider

    // Create buttons for the first slider
    const sliderButtons = [];
    for (let i = 0; i < this.dataLength; i++) {
      sliderButtons.push({
        type: MyButton,
        x: i * (300 + 30),
        item: {
          label: `Train`,
          src: Utils.asset(`images/cardImage${i + 1}.jpg`),
        },
      });
    }
    this.tag("Wrapper").children = sliderButtons;

    // Create buttons for the second slider
    const secondSliderButtons = [];
    for (let i = 0; i < this.dataLength; i++) {
      secondSliderButtons.push({
        type: MyButton,
        x: i * (300 + 30),
        item: {
          label: `Train`,
          src: Utils.asset(`images/cardImage${i + 6}.jpg`),
        },
      });
    }
    this.tag("SecondWrapper").children = secondSliderButtons;

    // Set the initial focus
    // this._setSliderFocus();
    this._updateCurrentTime();

    // Update the time every second (1000 milliseconds)
    setInterval(() => {
      this._updateCurrentTime();
    }, 1000);
  }

  _setSliderFocus() {
    if (this.currentSlider === "slider1") {
      this.tag("Wrapper").setSmooth("alpha", 1);
      this.tag("SecondWrapper").setSmooth("alpha", 1);
      this.tag("Wrapper").children[this.index].setFocus(true);
    } else if (this.currentSlider === "slider2") {
      this.tag("Wrapper").setSmooth("alpha", 1);
      this.tag("SecondWrapper").setSmooth("alpha", 1);
      this.tag("SecondWrapper").children[this.index].setFocus(true);
    }
  }

  $onItemSelect(obj) {
    const url =
      "https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)";
    this._player = new AAMPMediaPlayer();
    this._player.load(url);
    this._setState("VideoPlay");
  }

  _updateCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    this.tag("CurrentTime").text.text = `${formattedTime}`;
  }

  repositionWrapper() {
    const wrapper = this.tag("Wrapper");
    const sliderW = this.tag("Slider").w;
    const currentWrapperX =
      wrapper.transition("x").targetvalue || wrapper.x;
    const currentFocus = wrapper.children[this.index];
    const currentFocusX = currentFocus.x + currentWrapperX;
    const currentFocusOuterWidth =
      currentFocus.x + currentFocus.w;

    if (currentFocusX < 0) {
      wrapper.setSmooth("x", -currentFocus.x);
    } else if (currentFocusOuterWidth > sliderW) {
      wrapper.setSmooth(
        "x",
        sliderW - currentFocusOuterWidth
      );
    }
  }

  _handleLeft() {
    const slider =
      this.currentSlider === "slider1"
        ? this.tag("Wrapper")
        : this.tag("SecondWrapper");
    if (this.index > 0) {
      this.index--;
      slider.children[this.index].setFocus(true);
      slider.children[this.index + 1].setFocus(false);
    }
  }

  _handleRight() {
    const slider =
      this.currentSlider === "slider1"
        ? this.tag("Wrapper")
        : this.tag("SecondWrapper");
    if (this.index < this.dataLength - 1) {
      this.index++;
      slider.children[this.index].setFocus(true);
      slider.children[this.index - 1].setFocus(false);
    }
  }

  _handleUp() {
    if (this.currentSlider === "slider2") {
      this.currentSlider = "slider1";
      const secondSlider= this.tag("SecondWrapper");
      const focusele1=secondSlider.children[this.index];
      focusele1.setFocus(false);
      this._setSliderFocus();
    }
  }

  _handleDown() {
    if (this.currentSlider === "slider1") {
      this.currentSlider = "slider2";
      const firstslider= this.tag("Wrapper");
     const focusele=firstslider.children[this.index];
     focusele.setFocus(false);
      this._setSliderFocus();
    }
  }

  _getSliderFocused() {
    return this.tag("Slider.Wrapper").children[this.index];
  }

  static _states() {
    return [
      class LaunchView extends this {
        _getFocused() {
          return this.tag("Playbutton");
        }
      },
      class SecondSliderState extends this {
        _getFocused() {
          if (this.currentSlider === "slider1") {
            return this.tag("Slider.Wrapper").children[this.index];
          } else {
            return this.tag("SecondSlider.SecondWrapper").children[this.index];
          }
        }
      },
      class VideoPlay extends this {
        _getFocused() {
          return this.tag("Video");
        }
        $enter() {
          this.tag("Video").visible = true;
          this.tag("HelloWorld").visible = false;
          this.tag("Slider").visible = false;
          this.tag("SecondSlider").visible = false;
        }
        _handleBack() {
          console.log("back to launchView");
          this.tag("Video").visible = false;

          this.tag("HelloWorld").visible = true;
          this.tag("Slider").visible = true;
          this.tag("SecondSlider").visible = true;

          this._setState("LaunchView");
          if (this._player) {
            this._player.stop();
            this._player = null;
          }
        }
      },
    ];
  }

  _active() {
    console.log("active set state to launchView");
    this._setState("LaunchView");

    Device.version().then((version) => {
      const deviceVersion =
        "version:" +
        version.sdk.readable +
        " : v" +
        version.sdk.major +
        "." +
        version.sdk.minor +
        "." +
        version.sdk.patch;
      Log.info(deviceVersion);
      this.tag("Device").text.text += deviceVersion;
    });
  }
}
