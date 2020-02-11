<template>
  <el-card class="ide-card" body-style="padding: 20px">
    <div class="tool-row">
      <el-select style="width: 120px" v-model="language" placeholder="选择语言">
        <el-option
          v-for="lang of langs"
          :key="lang"
          :value="lang"
          :label="lang"
        ></el-option>
      </el-select>
      <el-select style="width: 120px" v-model="theme" placeholder="选择主题">
        <el-option
          v-for="t of themes"
          :key="t"
          :value="t"
          :label="t"
        ></el-option>
      </el-select>
    </div>
    <div class="ide-container">
      <div class="full" ref="ide"></div>
    </div>
  </el-card>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { Card, Select, Option } from 'element-ui';

export default {
  components: {
    [Card.name]: Card,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data () {
    return {
      ide: null,
      code: '',
      language: 'python',
      langs: ['python', 'java', 'cpp'],
      theme: 'vs-dark',
      themes: ['vs', 'vs-dark', 'hc-black'],
      options: {
        fontSize: 16,
        autoIndent: true
      }
    };
  },
  methods: {
  },
  mounted () {
    this.ide = monaco.editor.create(this.$refs.ide, {
      value: this.code,
      language: this.language,
      theme: this.theme,
      ...this.options
    });
  },
  watch: {
    language () {
      monaco.editor.setModelLanguage(this.ide.getModel(), this.language);
    },
    theme () {
      monaco.editor.setTheme(this.theme);
    }
  }
};
</script>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
.ide-card {
  width: 640px;
}
.ide-container {
  width: 600px;
  height: 400px;
}
.tool-row {
  margin-bottom: 20px;
}
</style>