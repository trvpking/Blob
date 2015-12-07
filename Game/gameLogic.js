A3D.config = {
  game:{
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'first_level'
  },
  scenes : {
    first_level : {
      rootUrl : './scenes/',
      file : 'platformer.babylon'
    }
  },

      lives: 4,
      speed : 1,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.8,

      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'Blob',
        rootUrl: '/models/',
        file:'boneanimation.babylon',
        spawnPoint : 'InitialSpawn',
        jumpForce : 4,
        jumpAccel : 2,
        animationsSetup : [
          {
            name : 'walk',
            start : 0,
            end : 39,
            options : {
              ratio: 3.5
            }
          },
          {
            name : 'idle',
            start:80,
            end : 83,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'jump',
            start : 80,
            end : 100,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : 1.5,
          right : -1.5
        },

        scale : {
          x: 3,
          y: 3,
          z : 3
        },
        boundsOffset : {
          z : -2,
          x : -2,
          y: 12
        }

      },
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 30,
          y : 20,
          z : -60
        },
        rotation : {
          x: .3,
          y: -.3,
          z: 0
        }
      }

};

function start(){
  new A3D.Game();
}

document.addEventListener( "DOMContentLoaded", start, false );
