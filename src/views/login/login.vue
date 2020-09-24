<template>
	<div id="login">
		<a-row type="flex" align="middle" justify="center">
		    <a-col :span="6">
		    	<a-form :form="form" @submit="handleSubmit" class="login_form"> 
					<a-form-item class="animate__animated animate__fadeInLeftBig" :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
					  <a-input
					    v-decorator="[
					      'userName',
					      { rules: [{ required: true, message: '请输入用户名!' }] },
					    ]"
					    placeholder="用户名"
					  >
					    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
					  </a-input>
					</a-form-item>
					<a-form-item class="animate__animated animate__fadeInRightBig" :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
					  <a-input
					    v-decorator="[
					      'password',
					      { rules: [{ required: true, message: '请输入密码!' }] },
					    ]"
					    type="password"
					    placeholder="密码"
					  >
					    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
					  </a-input>
					</a-form-item>
					<a-form-item>
					  <a-button class="login_button" type="primary" html-type="submit">
					      登录
					  </a-button>
					</a-form-item>
				</a-form>
		    </a-col>
	    </a-row>
	</div>
</template>

<script>
	import './login.less'
	export default {
		data() {
			return {
                form: this.$form.createForm(this, { name: 'horizontal_login' }),
			};
		},
		mounted() {
			this.$nextTick(() => {
			  this.form.validateFields();
			});
		},
		methods:{
		    userNameError() {
		      const { getFieldError, isFieldTouched } = this.form;
		      return isFieldTouched('userName') && getFieldError('userName');
		    },
		    passwordError() {
		      const { getFieldError, isFieldTouched } = this.form;
		      return isFieldTouched('password') && getFieldError('password');
		    },
		    handleSubmit(e) {
		      e.preventDefault();
		      this.form.validateFields((err, values) => {
		        if (!err) {
		             this.$router.push('/Home') 
		        }
		      });
		    },
		}
	}
</script>

<style>
</style>