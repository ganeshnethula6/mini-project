let data = [
  {
    userId: "USER0001",
    name: "Robers Sympson",
    profilePicture: "./assets/images/jsonImages/user1.jpg",
    statusMesssage: "The journey of a thousand miles begins with one step",
    presence: 4,
    chat: [],
  },
  {
    userId: "USER0002",
    name: "Leonard MacDirmid",
    profilePicture: "./assets/images/jsonImages/user2.jpeg",
    statusMesssage: "That which does not kill us makes us stronger.",
    presence: 1,
  },
  {
    userId: "USER0003",
    name: "Catharina Patroni",
    profilePicture: "./assets/images/jsonImages/user3.jpg",
    statusMesssage: "When the going gets tough, the tough get going.",
    presence: 3,
  },
  {
    userId: "USER0004",
    name: "Leilah Lavallin",
    profilePicture: "./assets/images/jsonImages/user4.jpg",
    statusMesssage: "You must be the change you wish to see in the world.",
    presence: 3,
  },
  {
    userId: "USER0005",
    name: "Rock Rilton",
    profilePicture: "./assets/images/jsonImages/user5.jpg",
    statusMesssage:
      "You only live once, but if you do it right, once is enough",
    presence: 1,
  },
  {
    userId: "USER0006",
    name: "Easter Eckley",
    profilePicture: "./assets/images/jsonImages/user6.jpg",
    statusMesssage:
      "You only live once, but if you do it right, once is enough",
    presence: 4,
  },
  {
    userId: "USER0007",
    name: "Cristionna Farren",
    profilePicture: "./assets/images/jsonImages/user7.png",
    statusMesssage: "Get busy living or get busy dying",
    presence: 1,
  },
  {
    userId: "USER0008",
    name: "Irene Dymidowski",
    profilePicture: "./assets/images/jsonImages/user8.jpg",
    statusMesssage:
      "Whether you think you can or you think you can’t, you’re right.",
    presence: 2,
  },
  {
    userId: "USER0009",
    name: "Feliks Milan",
    profilePicture: "./assets/images/jsonImages/user9.jpg",
    statusMesssage: "A man is but what he knows.",
    presence: 4,
  },
  {
    userId: "USER0010",
    name: "Chrysler Paulin",
    profilePicture: "./assets/images/jsonImages/user10.jpg",
    statusMesssage: "You miss 100 percent of the shots you never take.",
    presence: 3,
  },
  {
    userId: "USER0011",
    name: "Berry Eberle",
    profilePicture: "./assets/images/jsonImages/user11.jpg",
    statusMesssage: "If you’re going through hell, keep going.",
    presence: 3,
  },
  {
    userId: "USER0012",
    name: "Nick Bernollet",
    profilePicture: "./assets/images/jsonImages/user12.jpg",
    statusMesssage: "Strive not to be a success, but rather to be of value.",
    presence: 3,
  },
  {
    userId: "USER0013",
    name: "Leonid Silber",
    profilePicture: "./assets/images/jsonImages/user13.jpg",
    statusMesssage: "Those who dare to fail miserably can achieve greatly.",
    presence: 2,
  },
  {
    userId: "USER0014",
    name: "Tynan Edmunds",
    profilePicture: "./assets/images/jsonImages/user14.jpeg",
    statusMesssage: "The opposite of love is not hate; it’s indifference.",
    presence: 2,
  },
  {
    userId: "USER0015",
    name: "Lawry Heinreich",
    profilePicture: "./assets/images/jsonImages/user15.jpeg",
    statusMesssage: "Dream big and dare to fail.",
    presence: 4,
  },
];
function loadData(data) {
  console.log(data);
  let bodyContainer = $("#bodyContainer");
  bodyContainer.empty();
  let dyanamicData = ``;
  data.forEach((value, index, data) => {
    let presence;
    if (value.presence === 1) {
      presence = "online";
    } else if (value.presence == 2) {
      presence = "busy";
    } else if (value.presence == 3) {
      presence = "idle";
    } else if (value.presence == 4) {
      presence = "not-logged";
    }
    dyanamicData += ` <div id="${value.userId}" class="profile-cont" data-id="${
      value.userId
    }"  data-userinfo="${JSON.stringify(value)}">
    <div class="profile">
        <div class="profile-img ${presence}">
            <img src="${
              value.profilePicture
            }" style="height: 60px;width: 60px;" alt=""
                class="profile-image ">
        </div>
        <div class="profile-titles">
            <h3>${value.name}</h3>
            <p>${value.statusMesssage}</p>
        </div>
    </div>
    <div class="profile-menu">
        <span><a href="#"><i class="fa fa-ellipsis-v"></i></a></span>
    </div>
    </div> `;
  });
  bodyContainer.append(dyanamicData);
}
function loadMsgs(chat) {
  chat = [
    {
      type: "this-user",
      msg: "Hi Abdul",
    },
    {
      type: "end-user",
      msg: "Hi Abdul",
    },
    {
      type: "this-user",
      msg: "Hi Abdul",
    },
    {
      type: "end-user",
      msg: "Hi Abdul",
    },
  ];
  let msg = "";
  let usr;
  chat.forEach((value, id, array) => {
    if (value.type === "this-user") {
      usr = "this-user";
    } else {
      usr = "end-user";
    }
    msg += ` <div class="msg ${usr}">
    <p>${value.msg}</p><i class="fa fa-ellipsis-v"></i>
</div>`;
  });
  console.log(msg);
  $("#chat").empty();
  $("#chat").append(msg);
}

$(function () {
  loadData(data);
  $("#chatBox").hide();
  $("#chatNav").hide();
  $("#chatProfile").on("click", function () {
    $("#chatNav").toggle();
  });
  $(".profile-cont").on("click", function () {
    $("#chatBox").show();

    var userId = this.dataset.id;
    data.forEach((value, id, array) => {
      if (userId === value.userId) {
        loadMsgs(value.chat);
      }
    });
    $("send-btn").on("click", function () {
      pushMsg();
      let msg = $("#chatInput").val();
    });
  });
});
function pushMsg() {
  //todo
}
var stat = {
  userId: "USER0001",
  presence: 2,
};
function updatePresence(stat) {
  data.forEach((value, index, array) => {
    if (value.userId === stat.userId) {
      value.presence = stat.presence;
      loadData(array);
    }
  });
}
var msg = {
  userId: "USER0001",
  statusMesssage: "msg chanaged",
};
function updateStatus(msg) {
  data.forEach((value, index, array) => {
    if (value.userId === msg.userId) {
      value.statusMesssage = msg.statusMesssage;
      loadData(array);
    }
  });
}
var user = {
  userId: "USER0016",
  name: "Ganesh Nethula",
  profilePicture: "./assets/images/jsonImages/user16.jpeg",
  statusMesssage: "You miss 100 percent of the shots you never take.",
  presence: 3,
};
function addUser(user) {
  data.unshift(user);
  loadData(data);
}

function removeUser(userId) {
  data.forEach((value, index, array) => {
    if (value.userId === userId) {
      array.splice(index, 1);
      loadData(array);
    }
  });
}
