<template>
  <div>
    <h3>git面试题</h3>
    参考地址 https://mp.weixin.qq.com/s/WO2n-HhOam_o07nDy0ruEA
    <pre>
  <h5>git常用命令</h5>
  创建+分支切换： git checkout -b name
  合并分支 ：git merge name (在当前分支合并其他分支)

  <h5>如何使用git管理项目</h5>
    1. 在git 仓库创建一个项目 （git clone）
    2. 一个项目一般有master / develop 两个分支；
  <h5>git查看历史版本</h5>

  <h5>git Actions(持续集成和持续支付)</h5>
  git Action是一个持续集成和持续支付的平台，它可以做到自动化构建，测试，部署，
    你可以创建一个工作流，构建和测试每一个 pull request 或者部署合并后的代码到生产环境；
  git Action可以在你的代码仓库发生某个事件时运行一个工作流，比如有人给你的仓库新建了一个issue，你可以跑一个工作流
     自动的添加合适的标签；
  》git Action 组件
    你可以配置一个 GitHub Actions 工作流（workflow），它会在你的仓库发生某个事件时被触发，就比如一个 pull request 或者一个 issue 被创建的时候
    你的工作流包含一个或多个任务（job），他们可以并行或者串行执行，每一个任务（job）都会在它自己的虚拟运行器(runner)上，
    任务可以有一个或者多个步骤（steps）可以运行一个自定义的脚本或者动作（action），所谓action是一个可复用的扩展，用于简化你的工作流
    
    </pre>
  </div>
</template>