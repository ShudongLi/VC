<script>
    
    import { input } from 'vcomponent'
    import vcDemo from 'sitecomponent/demo'

    export default {

        data() {

            return {
                
                basicModel: ''
            }
        },

        components: {

            vcDemo,
            vcInput: input,
        }
    }
</script>

## Input组件

输入框组件。

### 代码示例

基本用法。

<vc-demo>

<div slot="example">
<vc-input :vc-model.sync="basicModel" placeholder="请输入内容"></vc-input>
{{basicModel}}
</div>

```html
<vc-input placeholder="请输入内容"></vc-input>
```

</vc-demo>

只读状态。

<vc-demo>

<div slot="example">
<vc-input placeholder="请输入内容" readonly></vc-input>
</div>

```html
<vc-input placeholder="请输入内容" readonly></vc-input>
```

</vc-demo>

禁用状态。

<vc-demo>

<div slot="example">
<vc-input placeholder="请输入内容" disabled></vc-input>
</div>

```html
<vc-input placeholder="请输入内容" disabled></vc-input>
```

</vc-demo>

带Icon的输入框

<vc-demo>

<div slot="example">
<vc-input :vc-model.sync="basicModel" placeholder="请输入内容" vc-icon="search"></vc-input>
</div>

```html
<vc-input placeholder="请输入内容" vc-icon="search"></vc-input>
```

</vc-demo>


