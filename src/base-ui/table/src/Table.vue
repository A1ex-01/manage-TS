<template>
  <div>
    <slot name="top"></slot>
    <el-table
      v-loading="formData ? false : true"
      :data="formData"
      :border="true"
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      v-bind="isTree"
    >
      <el-table-column v-if="showCheckBox" type="selection"></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
      ></el-table-column>
      <template v-for="item in formItems" :key="item.id">
        <el-table-column v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot
              :name="item.slotName"
              :data="item.slotName == 'edit' ? scope : scope.row[item.prop!]"
              v-if="item.slotName"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import { ITableItem } from "../index"
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<ITableItem[]>,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showCheckBox: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      required: true
    },
    showTree: {
      type: Boolean,
      default: false
    }
  },
  setup(prop) {
    const isTree: any = ref(false)
    if (prop.showTree) {
      isTree.value = {
        "row-key": "id",
        "tree-props": { children: "children" }
      }
    }
    return { isTree }
  }
})
</script>

<style scoped></style>
