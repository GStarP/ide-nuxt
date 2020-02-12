<template>
  <el-card class="ide-card" body-style="padding: 20px">
    <div class="tool-top">
      <span class="tool-caption">语言</span>
      <el-select style="width: 120px" v-model="language" placeholder="选择语言">
        <el-option
          v-for="lang of langs"
          :key="lang"
          :value="lang"
          :label="lang"
        ></el-option>
      </el-select>
      <span class="tool-caption">主题</span>
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
    <div class="tool-btm">
      <el-button
        type="primary"
        @click="commit"
      >提交</el-button>
      <el-button
        class="mr-12"
        type="primary"
        icon="el-icon-caret-right"
      >执行代码</el-button>
    </div>
  </el-card>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { Tag, Card, Select, Option, Button } from 'element-ui';
import { sonarQubeResponse } from '../mock/sonarqube'

export default {
  components: {
    [Card.name]: Card,
    [Select.name]: Select,
    [Option.name]: Option,
    [Button.name]: Button
  },
  data () {
    return {
      ide: null,
      code: 'package main.java;\n\nimport java.util.List;\n\n/**\n * @author fjj\n * @date 2020/2/7 1:04 PM\n */\npublic class Add {\n    public int add(int a,int b) {\n        return 0;\n    }\n}\n\n',
      language: 'java',
      langs: ['python', 'java', 'cpp'],
      theme: 'vs',
      themes: ['vs', 'vs-dark', 'hc-black'],
      options: {
        fontSize: 16,
        autoIndent: true
      }
    };
  },
  methods: {
    /**
     * severity: info-2 warning-4 danger-8
     */
    createMarker(severity, message, startLineNumber, endLineNumber, startColumn, endColumn) {
      return {
        severity,
        message,
        startLineNumber,
        endLineNumber,
        startColumn: startColumn + 1,
        endColumn: endColumn + 1
      }
    },
    showSonarQube(sonar) {
      let markerList = [];
      let issues = sonar.components[0].codeSmell.issues;
      for (let issue of issues) {
        markerList.push(this.createMarker(8, issue.message, issue.textRange.startLine, issue.textRange.endLine, issue.textRange.startOffset, issue.textRange.endOffset));
      }
      monaco.editor.setModelMarkers(this.ide.getModel(), '', markerList);
    },
    commit () {
      this.showSonarQube(sonarQubeResponse);
    }
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
  width: 840px;
}
.ide-container {
  width: 800px;
  height: 500px;
}
.tool-top {
  margin-bottom: 20px;
}
.tool-caption {
  color: #909399;
  margin-left: 10px;
  margin-right: 4px;
}
.tool-btm {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
}
.mr-12 {
  margin-right: 12px;
}
</style>