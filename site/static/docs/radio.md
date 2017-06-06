<script>
    
    import vcDemo from 'sitecomponent/demo'

    export default {

        data() {

            return {

                basicModel: '1',
                basicModel2: 'a',
                disabledModel: '1',
                fm: 'vue'
            }
        },

        components: {

            vcDemo
        },

        methods: {

            change(val) {

                this.basicModel2 = val
            }
        }
    }
</script>

## Radio组件

单选按钮。

### 代码示例

基本用法。

<vc-demo>

<div slot="example">
<p>
    <vc-radio :vc-model.sync="basicModel" vc-value="1">备选项</vc-radio>
    <vc-radio :vc-model.sync="basicModel" vc-value="2">备选项</vc-radio>
</p>
</div>

```html
<vc-radio :vc-model.sync="basicModel" vc-value="1">备选项</vc-radio>
<vc-radio :vc-model.sync="basicModel" vc-value="2">备选项</vc-radio>

<script>
    
    export default {

        data() {

            return {

                basicModel: '1'
            }
        }
    }
</script>
```

</vc-demo>

在Vuejs1.x中，不支持`v-model`使用在自定义组件上，因此为保证兼容性，采用更加通用的方式，在1.x中通过`props`绑定，使用`sync`保持同步，在不支持`.sync`的2.x版本通过监听`radiochange`事件手动同步model值。

<vc-demo>

<div slot="example">
<p>
    <vc-radio :vc-model="basicModel2" @radio.change="change" vc-value="a">备选项</vc-radio>
    <vc-radio :vc-model="basicModel2" @radio.change="change" vc-value="b">备选项</vc-radio>
</p>
</div>

```html
<vc-radio :vc-model="basicModel2" @radio.change="change" vc-value="a">备选项</vc-radio>
<vc-radio :vc-model="basicModel2" @radio.change="change" vc-value="b">备选项</vc-radio>

<script>
    
    export default {

        data() {

            return {

                basicModel2: 'a'
            }
        },

        methods: {

            change(val) {

                this.basicModel2 = val
            }
    }
</script>
```

</vc-demo>

禁用状态。

<vc-demo>

<div slot="example">
<p>
    <vc-radio :vc-model.sync="disabledModel" vc-value="1" disabled>备选项</vc-radio>
    <vc-radio :vc-model.sync="disabledModel" vc-value="2" disabled>备选项</vc-radio>
</p>
</div>

```html
<vc-radio :vc-model.sync="disabledModel" vc-value="1" disabled>备选项</vc-radio>
<vc-radio :vc-model.sync="disabledModel" vc-value="2" disabled>备选项</vc-radio>

<script>
    
    export default {

        data() {

            return {

                disabledModel: '1'
            }
        }
    }
</script>
```

</vc-demo>

单选组。

<vc-demo>

<div slot="example">
<vc-radio-group>
    <vc-radio :vc-model.sync="fm" vc-value="vue">Vue</vc-radio>
    <vc-radio :vc-model.sync="fm" vc-value="angular">Angular</vc-radio>
    <vc-radio :vc-model.sync="fm" vc-value="react">react</vc-radio>
</vc-radio-group>
</div>

```html
<vc-radio :vc-model.sync="fm" vc-value="vue">Vue</vc-radio>
<vc-radio :vc-model.sync="fm" vc-value="angular">Angular</vc-radio>
<vc-radio :vc-model.sync="fm" vc-value="react">react</vc-radio>

<script>
    
    export default {

        data() {

            return {

                fm: 'vue'
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
|vc-value|radio的值|String,Number,Boolean|_|
|vc-model|radio绑定的model|Object|_|
|disabled|设置按钮禁用状态|Boolean|false|

#### Events

|事件名称|说明|回调参数|
|:---|:---|:---|:---|
|radio.change|兼容2.x不支持`.sync`的hack用法|选中radio的值|

