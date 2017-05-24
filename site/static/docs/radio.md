<script>
    
    import { radio } from 'vcomponent'
    import vcDemo from 'sitecomponent/demo'

    export default {

        data() {

            return {

                basicModel: '1',
                basicModel2: 'a',
                disabledModel: '1'
            }
        },

        components: {

            vcDemo,
            vcRadio: radio
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



