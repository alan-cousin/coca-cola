window.dragon = {
  init: function () {
    remove_over();
  },

  clickPlay: function () {
    unityInstance.SendMessage('DragonEventHandler', 'StartGame');
  },

  clickHome: function () {
    unityInstance.SendMessage('DragonEventHandler', 'StopGame');
  },

  clickCustomize: function (data) {
    const modelData = JSON.stringify(data);
    unityInstance.SendMessage('DragonEventHandler', 'OpenAvatarWindow', modelData);
  },

  clickMap: function (data) {
    const jsonData = { data: [...data] }
    const modelData = JSON.stringify(jsonData);
    unityInstance.SendMessage('DragonEventHandler', 'OpenMap', modelData);
  },

  stopUnityGame: function () {
    unityInstance.SendMessage('DragonEventHandler', 'StopGame');
  },

  reactKeyboard: function () {
    unityInstance.SendMessage('DragonEventHandler', 'PassReact');
  },

  unityKeyboard: function () {
    unityInstance.SendMessage('DragonEventHandler', 'PassUnity');
  }
}
