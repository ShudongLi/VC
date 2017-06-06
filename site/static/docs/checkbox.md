<script>
    
    import vcDemo from 'sitecomponent/demo'

    export default {

        data() {

            return {

                basicModel: true,
                framwork: ['vue'],
                ui: ['vc']
            }
        },

        components: {

            vcDemo
        }
    }
</script>

## Checkbox组件

多选按钮

### 代码示例

基本用法。

<vc-demo>

<div slot="example">
<p>
    <vc-checkbox :vc-model.sync="basicModel">备选项</vc-checkbox>
</p>
</div>

```html
<vc-checkbox :vc-model.sync="basicModel">备选项</vc-checkbox>

<script>
    
    export default {

        data() {

            return {

                basicModel: true
            }
        }
    }
</script>
```

</vc-demo>

多选用法。

<vc-demo>

<div slot="example">
<p>
    <vc-checkbox :vc-model.sync="framwork" vc-value="vue">Vue</vc-checkbox>
    <vc-checkbox :vc-model.sync="framwork" vc-value="angular">Angular</vc-checkbox>
    <vc-checkbox :vc-model.sync="framwork" vc-value="react">React</vc-checkbox>
</p>
</div>

```html
<vc-checkbox :vc-model.sync="framwork" vc-value="vue">Vue</vc-checkbox>
<vc-checkbox :vc-model.sync="framwork" vc-value="angular">Angular</vc-checkbox>
<vc-checkbox :vc-model.sync="framwork" vc-value="react">React</vc-checkbox>

<script>
    
    export default {

        data() {

            return {

                framwork: ['vue']
            }
        }
    }
</script>
```

</vc-demo>

禁用状态。

<vc-demo>

<div slot="example">
<p>
    <vc-checkbox :vc-model.sync="framwork" vc-value="vue">Vue</vc-checkbox>
    <vc-checkbox :vc-model.sync="framwork" vc-value="angular" disabled>Angular</vc-checkbox>
    <vc-checkbox :vc-model.sync="framwork" vc-value="react" disabled>React</vc-checkbox>
</p>
</div>

```html
<vc-checkbox :vc-model.sync="framwork" vc-value="vue">Vue</vc-checkbox>
<vc-checkbox :vc-model.sync="framwork" vc-value="angular" disabled>Angular</vc-checkbox>
<vc-checkbox :vc-model.sync="framwork" vc-value="react" disabled>React</vc-checkbox>

<script>
    
    export default {

        data() {

            return {

                framwork: ['vue']
            }
        }
    }
</script>
```

</vc-demo>

按钮组形态。

<vc-demo>

<div slot="example">
<vc-checkbox-group>
    <vc-checkbox :vc-model.sync="ui" vc-value="vc">vc</vc-checkbox>
    <vc-checkbox :vc-model.sync="ui" vc-value="element">element</vc-checkbox>
    <vc-checkbox :vc-model.sync="ui" vc-value="iview">iview</vc-checkbox>
</vc-checkbox-group>
</div>

```html
<vc-checkbox :vc-model.sync="ui" vc-value="vc">vc</vc-checkbox>
<vc-checkbox :vc-model.sync="ui" vc-value="element">element</vc-checkbox>
<vc-checkbox :vc-model.sync="ui" vc-value="iview">iview</vc-checkbox>

<script>
    
    export default {

        data() {

            return {

                ui: ['vue']
            }
        }
    }
</script>
```


</vc-demo>

### API

#### Props

|属性|说明|类型|默认值|
|:---|:---|:---|:---|
|vc-value|checkbox的值|String,Number,Boolean|_|
|vc-model|checkbox绑定的model|Object|_|
|disabled|设置按钮禁用状态|Boolean|false|

#### Events

|事件名称|说明|回调参数|
|:---|:---|:---|:---|
|checkbox.change|兼容2.x不支持`.sync`的hack用法|选中radio的值|



