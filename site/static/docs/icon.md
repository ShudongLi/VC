<script>
    
    import { icon } from 'vcomponent'
    import vcDemo from 'sitecomponent/demo'

    export default {

        components: {

            vcDemo,
            vcIcon: icon
        }
    }
</script>

## Icon组件

基于font-awesome图标库集合。

### 代码示例

基础用法，指定`vc-name`，设置图标样式。

<vc-demo>

<div slot="example">
<vc-icon vc-name="camera-retro"></vc-icon>
</div>

```html
<vc-icon vc-name="camera-retro"></vc-icon>
```

</vc-demo>

指定图标大小，设置`vc-size`，控制图标大小

<vc-demo>

<div slot="example">
<p>
    <vc-icon vc-name="camera-retro" vc-size="lg"></vc-icon>
</p>
<p>
    <vc-icon vc-name="camera-retro" vc-size="2x"></vc-icon>
</p>
<p>
    <vc-icon vc-name="camera-retro" vc-size="3x"></vc-icon>
</p>
<p>
    <vc-icon vc-name="camera-retro" vc-size="4x"></vc-icon>
</p>
<p>
    <vc-icon vc-name="camera-retro" vc-size="5x"></vc-icon>
</p>
</div>

```html
<vc-icon vc-name="camera-retro" vc-size="lg"></vc-icon>

<vc-icon vc-name="camera-retro" vc-size="2x"></vc-icon>

<vc-icon vc-name="camera-retro" vc-size="3x"></vc-icon>

<vc-icon vc-name="camera-retro" vc-size="4x"></vc-icon>

<vc-icon vc-name="camera-retro" vc-size="5x"></vc-icon>
```

</vc-demo>

### API

#### props

|属性|说明|类型|默认值|
|:---|:---|:---|:---|
|vc-name|[font-awesome](http://fontawesome.io/icons/)对应图标样式|String|无|
|vc-size|字体大小，具体规则可参考[font-awesome](http://fontawesome.io/examples/)|String|无|   

