# Hyperlink Redirect

一个心血来潮做的外链跳转确认页。

## 特性

- 没啥用的跟随设备切换深浅色主题；
- 链接存活状态检测（通过我们的 Serverless API 检测）；

嗯，就没了。跳转确认页为什么会有这么多特性（x

## 关于链接存活状态检测

当访客进入到确认页时，前端会向我们的 Serverless API 发出一个 GET 请求。~~至于为什么不是 POST，因为我不会玩 CORS，还是 GET 比较简单~~

```
GET https://api.slirv.vip/url-check?check=https://www.gxres.net
```

后端在接到前端发来的请求后，会 fetch 目标 URL 并返回状态码和状态信息。有关 Serverless API 如何工作，[请看这里（很简单）](https://github.com/s-complex/api/blob/main/server/routes/url-check/index.ts)。

返回的内容如下：

``` json
{
    "statusCode": 200,
    "statusMessage": "OK"
}
```

前端接到后端返回的信息后，将会呈现在跳转按钮的下方、供用户参考。该检测不会阻拦用户点击跳转按钮。

> 由于 Serverless API 部署在 Cloudflare 上，一些网站（如 Wikipedia）在国内可能无法访问，适当参考跳转页的检测提示即可。
