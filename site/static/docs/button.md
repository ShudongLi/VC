<script>
    
    import { button, buttonGroup } from 'vcomponent'
    import vcDemo from 'sitecomponent/demo'

    export default {

        components: {

            vcDemo,
            vcButtonGroup: buttonGroup,
            vcButton: button
        }
    }
</script>

## Button组件

常用按钮集合。

### 代码示例

基本按钮用法。

<vc-demo>

<div slot="example">
<vc-button>默认按钮</vc-button>
</div>

```html
<vc-button>默认按钮</vc-button>
```

</vc-demo>

通过添加`disabled`属性，设置按钮不可用状态。

<vc-demo>

<div slot="example">
<vc-button disabled>禁用按钮</vc-button>
</div>

```html
<vc-button disabled>禁用按钮</vc-button>
```
    
</vc-demo>

通过设置`vc-type`，控制按钮状态。

<vc-demo>

<div slot="example">
<vc-button vc-type="primary">主要按钮</vc-button>
<vc-button vc-type="success">成功按钮</vc-button>
<vc-button vc-type="info">信息按钮</vc-button>
<vc-button vc-type="warning">警告按钮</vc-button>
<vc-button vc-type="danger">危险按钮</vc-button>
</div>

```html
<vc-button vc-type="primary">主要按钮</vc-button>
<vc-button vc-type="success">成功按钮</vc-button>
<vc-button vc-type="info">信息按钮</vc-button>
<vc-button vc-type="warning">警告按钮</vc-button>
<vc-button vc-type="danger">危险按钮</vc-button>
```

</vc-demo>

通过设置`vc-size`，控制按钮大小。

<vc-demo>

<div slot="example">
<vc-button vc-size="lg">大型按钮</vc-button>
<vc-button >正常按钮</vc-button>
<vc-button vc-size="sm">小型按钮</vc-button>
<vc-button vc-size="xs">迷你按钮</vc-button>
</div>

```html
<vc-button vc-size="lg">大型按钮</vc-button>
<vc-button >正常按钮</vc-button>
<vc-button vc-size="sm">小型按钮</vc-button>
<vc-button vc-size="xs">迷你按钮</vc-button>
```

</vc-demo>

通过设置`vc-icon`，设置图标样式，配置`vc-circle`，设置为圆形图标。

<vc-demo> 

<div slot="example">
<vc-button vc-type="primary" vc-icon="github">github</vc-button>
<vc-button vc-type="primary" vc-icon="wechat" vc-circle></vc-button>
<vc-button vc-type="primary" vc-icon="weibo" vc-circle></vc-button>
<vc-button vc-type="primary" vc-icon="twitter" vc-circle></vc-button>
</div>

```html
<vc-button vc-type="primary" vc-icon="github">github</vc-button>
<vc-button vc-type="primary" vc-icon="wechat" vc-circle></vc-button>
<vc-button vc-type="primary" vc-icon="weibo" vc-circle></vc-button>
<vc-button vc-type="primary" vc-icon="twitter" vc-circle></vc-button>
```

</vc-demo>

组合按钮

<vc-demo> 

<div slot="example">
<vc-button-group>
    <vc-button vc-icon="github">github</vc-button>
    <vc-button vc-icon="pencil"></vc-button>
    <vc-button vc-icon="share-alt"></vc-button>
    <vc-button vc-icon="trash"></vc-button>
</vc-button-group>
</div>

```html
<vc-button-group>
    <vc-button vc-icon="github">github</vc-button>
    <vc-button vc-icon="wechat"></vc-button>
    <vc-button vc-icon="weibo"></vc-button>
    <vc-button vc-icon="twitter"></vc-button>
</vc-button-group>
```

</vc-demo>

### API

#### props

|属性|说明|类型|默认值|
|:---|:---|:---|:---|
|vc-type|设置按钮状态，**primary**，**success**，**info**，**warning**，**danger**|String|_|
|vc-size|设置按钮大小，**lg**，**sm**，**xs**|String|_|
|vc-icon|设置按钮图标，参考[font-awesome](http://fontawesome.io/icons/)对应图标样式|String|_|
|disabled|设置按钮禁用状态|Boolean|false|

