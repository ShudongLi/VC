<script>
    
    import vcDemo from 'sitecomponent/demo'

    export default {

        data() {

            return {
                
                basicModel: '',
                readonlyModel: '我不会被修改哦',
                iconModel: '',
                resizeModel: '',
                resizeAutoModel: '',
                compoundMolde: '',
            }
        },

        components: {

            vcDemo
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
<vc-input :vc-model.sync="basicModel" placeholder="请输入内容"></vc-input>

<script>
    
    export default {

        data() {

            return {

                basicModel: ''
            }
        }
    }
</script>
```

</vc-demo>

只读状态。

<vc-demo>

<div slot="example">
<vc-input :vc-model.sync="readonlyModel" placeholder="请输入内容" readonly></vc-input>
</div>

```html
<vc-input :vc-model.sync="readonlyModel" placeholder="请输入内容" readonly></vc-input>

<script>
    
    export default {

        data() {

            return {

                readonlyModel: '我不会被修改哦'
            }
        }
    }
</script>
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
<vc-input :vc-model.sync="iconModel" placeholder="请输入内容" vc-icon="search"></vc-input>
</div>

```html
<vc-input :vc-model.sync="iconModel" placeholder="请输入内容" vc-icon="search"></vc-input>

<script>
    
    export default {

        data() {

            return {

                iconModel: ''
            }
        }
    }
</script>
```

</vc-demo>

文本域，可指定为`textarea`，也可通过`vc-auto-size`设置为自动调整高度的文本域。

<vc-demo>

<div slot="example">
<vc-input :vc-model.sync="resizeModel" placeholder="请输入内容" textarea></vc-input> 
<vc-input :vc-model.sync="resizeAutoModel" placeholder="请输入内容" vc-auto-size textarea></vc-input> 

</div>

```html

<vc-input :vc-model.sync="resizeModel" placeholder="请输入内容" textarea></vc-input>

<vc-input :vc-model.sync="resizeAutoModel" placeholder="请输入内容" vc-auto-size textarea ></vc-input>
```

</vc-demo>

复合型输入框。

<vc-demo>

<div slot="example">
<vc-input :vc-model.sync="compoundMolde" name="http1" placeholder="请输入内容">
<span slot="prepend">Http://</span>
</vc-input>
<vc-input :vc-model.sync="compoundMolde" name="http2" placeholder="请输入内容">
<span slot="append">.com</span>
</vc-input> 
<vc-input :vc-model.sync="compoundMolde" name="http3" placeholder="请输入内容">
<span slot="prepend">Http://</span>
<span slot="append">.com</span>
</vc-input>
</div>

```html

<vc-input :vc-model.sync="compoundMolde" name="http" placeholder="请输入内容"></vc-input>
```

</vc-demo>



