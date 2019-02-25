# Cordova Plugin - Home As Back

Home button triggers back button functionality.

## Use

### Add plugin to Ionic project

`$ ionic cordova plugin add https://github.com/gerardforcada/cordova-plugin-home-as-back.git`

add the following code where ever is required

```js
homeAsBack.trigger(function(){
    console.log("Success");
}, function(){
    console.log("Error");
});
```

## Platforms

Only for Android