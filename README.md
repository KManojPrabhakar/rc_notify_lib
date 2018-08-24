# React-Toastify

React-Toastify allow you to add notification to your app with ease.

## Installation

You can install this package by simply running npm install --save  rc_toastify or yarn add  rc_toastify.

Once this has finished, you can import the package. Below is an example:

```

 import {Toastify} from "rc_toastify";

 ```



####  Usage

The Toastify package allows you to fire different levels of notifications. At present you can fire: info, success error and warning. To do this you simply call the respective method. For example, to fire a success notification you would do the following:

```

<Toastify notifyType="success" message="hello react notification">

```



As you can see, the notifyType props as like success, info and so on  is the type of the notification. The message props is the message of the notification. Default notifyType is success.

#### Configuration


There are a small number of options you can configure in this package. These are the positionValue and autoClose.

To set an position, you can simply pass the positionValue as props. Here is an example:


```

<Toastify positionValue="topright" message="hello react notification">

```


##### Position

By default, the position is set to "topright". However you can alter this to one of the following if you wish: "topleft", "bottomright", "bottomleft".

##### Delay

To set an delay time  for notification, you can simply pass the autoClose as props. Here is an example:

```

 <Toastify positionValue="topright" autoClose="2000" message="hello react notification">

 ```


The delay value determines how long this notification appears on screen before it disappears. The default value is 3 seconds (3000ms). You can alter this to any number you wish.
