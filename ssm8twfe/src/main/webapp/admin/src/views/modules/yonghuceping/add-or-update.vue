<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="测评名称" prop="cepingmingcheng">
          <el-input v-model="ruleForm.cepingmingcheng" 
              placeholder="测评名称" clearable  :readonly="ro.cepingmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="测评名称" prop="cepingmingcheng">
              <el-input v-model="ruleForm.cepingmingcheng" 
                placeholder="测评名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="测评类型" prop="cepingleixing">
          <el-input v-model="ruleForm.cepingleixing" 
              placeholder="测评类型" clearable  :readonly="ro.cepingleixing"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="测评类型" prop="cepingleixing">
              <el-input v-model="ruleForm.cepingleixing" 
                placeholder="测评类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目一" prop="timuyi">
          <el-input v-model="ruleForm.timuyi" 
              placeholder="题目一" clearable  :readonly="ro.timuyi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目一" prop="timuyi">
              <el-input v-model="ruleForm.timuyi" 
                placeholder="题目一" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项一" prop="xuanxiangyi">
          <el-select v-model="ruleForm.xuanxiangyi" placeholder="请选择选项一">
            <el-option
                v-for="(item,index) in xuanxiangyiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项一" prop="xuanxiangyi">
	      <el-input v-model="ruleForm.xuanxiangyi"
                placeholder="选项一" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目二" prop="timuer">
          <el-input v-model="ruleForm.timuer" 
              placeholder="题目二" clearable  :readonly="ro.timuer"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目二" prop="timuer">
              <el-input v-model="ruleForm.timuer" 
                placeholder="题目二" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项二" prop="xuanxianger">
          <el-select v-model="ruleForm.xuanxianger" placeholder="请选择选项二">
            <el-option
                v-for="(item,index) in xuanxiangerOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项二" prop="xuanxianger">
	      <el-input v-model="ruleForm.xuanxianger"
                placeholder="选项二" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目三" prop="timusan">
          <el-input v-model="ruleForm.timusan" 
              placeholder="题目三" clearable  :readonly="ro.timusan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目三" prop="timusan">
              <el-input v-model="ruleForm.timusan" 
                placeholder="题目三" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项三" prop="xuanxiangsan">
          <el-select v-model="ruleForm.xuanxiangsan" placeholder="请选择选项三">
            <el-option
                v-for="(item,index) in xuanxiangsanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项三" prop="xuanxiangsan">
	      <el-input v-model="ruleForm.xuanxiangsan"
                placeholder="选项三" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目四" prop="timusi">
          <el-input v-model="ruleForm.timusi" 
              placeholder="题目四" clearable  :readonly="ro.timusi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目四" prop="timusi">
              <el-input v-model="ruleForm.timusi" 
                placeholder="题目四" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项四" prop="xuanxiangsi">
          <el-select v-model="ruleForm.xuanxiangsi" placeholder="请选择选项四">
            <el-option
                v-for="(item,index) in xuanxiangsiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项四" prop="xuanxiangsi">
	      <el-input v-model="ruleForm.xuanxiangsi"
                placeholder="选项四" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目五" prop="timuwu">
          <el-input v-model="ruleForm.timuwu" 
              placeholder="题目五" clearable  :readonly="ro.timuwu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目五" prop="timuwu">
              <el-input v-model="ruleForm.timuwu" 
                placeholder="题目五" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项五" prop="xuanxiangwu">
          <el-select v-model="ruleForm.xuanxiangwu" placeholder="请选择选项五">
            <el-option
                v-for="(item,index) in xuanxiangwuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项五" prop="xuanxiangwu">
	      <el-input v-model="ruleForm.xuanxiangwu"
                placeholder="选项五" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="题目六" prop="timuliu">
          <el-input v-model="ruleForm.timuliu" 
              placeholder="题目六" clearable  :readonly="ro.timuliu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="题目六" prop="timuliu">
              <el-input v-model="ruleForm.timuliu" 
                placeholder="题目六" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="选项六" prop="xuanxiangliu">
          <el-select v-model="ruleForm.xuanxiangliu" placeholder="请选择选项六">
            <el-option
                v-for="(item,index) in xuanxiangliuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="选项六" prop="xuanxiangliu">
	      <el-input v-model="ruleForm.xuanxiangliu"
                placeholder="选项六" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="提交时间" prop="tijiaoshijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.tijiaoshijian" 
                type="date"
                placeholder="提交时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.tijiaoshijian" label="提交时间" prop="tijiaoshijian">
              <el-input v-model="ruleForm.tijiaoshijian" 
                placeholder="提交时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="姓名" prop="xingming">
          <el-input v-model="ruleForm.xingming" 
              placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="姓名" prop="xingming">
              <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="账号" prop="zhanghao">
          <el-input v-model="ruleForm.zhanghao" 
              placeholder="账号" clearable  :readonly="ro.zhanghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="账号" prop="zhanghao">
              <el-input v-model="ruleForm.zhanghao" 
                placeholder="账号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"dateBorderStyle":"solid","selectFontSize":"15px","inputBorderRadius":"15px","inputFontSize":"15px","btnSaveFontSize":"15px","dateFontSize":"15px","textareaBorderRadius":"15px","inputBorderWidth":"1px","uploadIconFontSize":"15px","selectHeight":"46px","uploadHeight":"45px","textareaBorderStyle":"solid","btnCancelWidth":"60px","textareaLableFontSize":"15px","textareaHeight":"45px","btnSaveBorderRadius":"15px","textareaBorderWidth":"1px","btnCancelFontSize":"15px","dateIconFontSize":"15px","inputBorderStyle":"solid","btnSaveBgColor":"rgba(255, 140, 0, 1)","btnCancelBorderRadius":"15px","btnCancelBgColor":"rgba(255, 69, 0, 1)","inputLableFontSize":"15px","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"15px","uploadBorderRadius":"15px","btnSaveHeight":"45px","dateBorderRadius":"15px","btnSaveWidth":"60px","btnCancelBorderStyle":"solid","selectIconFontSize":"15px","dateHeight":"45px","selectLableFontSize":"15px","selectBorderStyle":"solid","selectBorderWidth":"1px","btnCancelBorderWidth":"0px","uploadBorderWidth":"1px","btnCancelHeight":"45px","inputHeight":"46px","textareaFontSize":"15px","btnCancelFontColor":"rgba(255, 255, 255, 1)","selectBorderRadius":"15px","btnSaveBorderWidth":"0px","uploadBorderStyle":"solid"},
      id: '',
      type: '',
      ro:{
	cepingmingcheng : false,
	cepingleixing : false,
	timuyi : false,
	xuanxiangyi : false,
	timuer : false,
	xuanxianger : false,
	timusan : false,
	xuanxiangsan : false,
	timusi : false,
	xuanxiangsi : false,
	timuwu : false,
	xuanxiangwu : false,
	timuliu : false,
	xuanxiangliu : false,
	tijiaoshijian : false,
	xingming : false,
	zhanghao : false,
      },
      ruleForm: {
        cepingmingcheng: '',
        cepingleixing: '',
        timuyi: '',
        xuanxiangyi: '',
        timuer: '',
        xuanxianger: '',
        timusan: '',
        xuanxiangsan: '',
        timusi: '',
        xuanxiangsi: '',
        timuwu: '',
        xuanxiangwu: '',
        timuliu: '',
        xuanxiangliu: '',
        tijiaoshijian: '',
        xingming: '',
        zhanghao: '',
      },
          xuanxiangyiOptions: [],
          xuanxiangerOptions: [],
          xuanxiangsanOptions: [],
          xuanxiangsiOptions: [],
          xuanxiangwuOptions: [],
          xuanxiangliuOptions: [],
      rules: {
          cepingmingcheng: [
          ],
          cepingleixing: [
          ],
          timuyi: [
          ],
          xuanxiangyi: [
          ],
          timuer: [
          ],
          xuanxianger: [
          ],
          timusan: [
          ],
          xuanxiangsan: [
          ],
          timusi: [
          ],
          xuanxiangsi: [
          ],
          timuwu: [
          ],
          xuanxiangwu: [
          ],
          timuliu: [
          ],
          xuanxiangliu: [
          ],
          tijiaoshijian: [
          ],
          xingming: [
          ],
          zhanghao: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.ruleForm.tijiaoshijian = this.getCurDate()
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='cepingmingcheng'){
            this.ruleForm.cepingmingcheng = obj[o];
	    this.ro.cepingmingcheng = true;
            continue;
          }
          if(o=='cepingleixing'){
            this.ruleForm.cepingleixing = obj[o];
	    this.ro.cepingleixing = true;
            continue;
          }
          if(o=='timuyi'){
            this.ruleForm.timuyi = obj[o];
	    this.ro.timuyi = true;
            continue;
          }
          if(o=='xuanxiangyi'){
            this.ruleForm.xuanxiangyi = obj[o];
	    this.ro.xuanxiangyi = true;
            continue;
          }
          if(o=='timuer'){
            this.ruleForm.timuer = obj[o];
	    this.ro.timuer = true;
            continue;
          }
          if(o=='xuanxianger'){
            this.ruleForm.xuanxianger = obj[o];
	    this.ro.xuanxianger = true;
            continue;
          }
          if(o=='timusan'){
            this.ruleForm.timusan = obj[o];
	    this.ro.timusan = true;
            continue;
          }
          if(o=='xuanxiangsan'){
            this.ruleForm.xuanxiangsan = obj[o];
	    this.ro.xuanxiangsan = true;
            continue;
          }
          if(o=='timusi'){
            this.ruleForm.timusi = obj[o];
	    this.ro.timusi = true;
            continue;
          }
          if(o=='xuanxiangsi'){
            this.ruleForm.xuanxiangsi = obj[o];
	    this.ro.xuanxiangsi = true;
            continue;
          }
          if(o=='timuwu'){
            this.ruleForm.timuwu = obj[o];
	    this.ro.timuwu = true;
            continue;
          }
          if(o=='xuanxiangwu'){
            this.ruleForm.xuanxiangwu = obj[o];
	    this.ro.xuanxiangwu = true;
            continue;
          }
          if(o=='timuliu'){
            this.ruleForm.timuliu = obj[o];
	    this.ro.timuliu = true;
            continue;
          }
          if(o=='xuanxiangliu'){
            this.ruleForm.xuanxiangliu = obj[o];
	    this.ro.xuanxiangliu = true;
            continue;
          }
          if(o=='tijiaoshijian'){
            this.ruleForm.tijiaoshijian = obj[o];
	    this.ro.tijiaoshijian = true;
            continue;
          }
          if(o=='xingming'){
            this.ruleForm.xingming = obj[o];
	    this.ro.xingming = true;
            continue;
          }
          if(o=='zhanghao'){
            this.ruleForm.zhanghao = obj[o];
	    this.ro.zhanghao = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
		if(json.xingming!=''&&json.xingming){
              		this.ruleForm.xingming = json.xingming
		}
		if(json.zhanghao!=''&&json.zhanghao){
              		this.ruleForm.zhanghao = json.zhanghao
		}
        } else {
          this.$message.error(data.msg);
        }
      });
            this.xuanxiangyiOptions = "经常,偶尔,不会".split(',')
            this.xuanxiangerOptions = "经常,偶尔,不会".split(',')
            this.xuanxiangsanOptions = "经常,偶尔,不会".split(',')
            this.xuanxiangsiOptions = "经常,偶尔,不会".split(',')
            this.xuanxiangwuOptions = "经常,偶尔,不会".split(',')
            this.xuanxiangliuOptions = "经常,偶尔,不会".split(',')
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `yonghuceping/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}

















      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `yonghuceping/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.yonghucepingCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yonghucepingCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
