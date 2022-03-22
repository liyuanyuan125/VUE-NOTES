<template>
  <div>
  <pre>
  参考地址 https://mp.weixin.qq.com/s/WO2n-HhOam_o07nDy0ruEA（git action自动化部署总结）
  参考地址：https://mp.weixin.qq.com/s/BzdgZXyM1UaNCUCXySL9Rw（45 个 Git 经典操作场景，专治不会合代码）
  <h5>git常用命令</h5>
  1. 创建+分支切换： git checkout -b name
  2. 合并分支 ：git merge name (在当前分支合并其他分支)
  3. 查看commit提交内容 git show
  4. 

  <h5>git Actions(持续集成和持续支付)</h5>
  git Action是一个持续集成和持续支付的平台，它可以做到自动化构建，测试，部署，
    你可以创建一个工作流，构建和测试每一个 pull request 或者部署合并后的代码到生产环境；
  git Action可以在你的代码仓库发生某个事件时运行一个工作流，比如有人给你的仓库新建了一个issue，你可以跑一个工作流
     自动的添加合适的标签；
  》git Action 组件
    git action就是发生某个事件（push）触发一个工作流
    你可以配置一个 GitHub Actions 工作流（workflow），它会在你的仓库发生某个事件时被触发，就比如一个 pull request 或者一个 issue 被创建的时候
    你的工作流包含一个或多个任务（job），他们可以并行或者串行执行，每一个任务（job）都会在它自己的虚拟运行器(runner)上，
    任务可以有一个或者多个步骤（steps）可以运行一个自定义的脚本或者动作（action），所谓action是一个可复用的扩展，用于简化你的工作流
  》Workflows（工作流）
    工作流就是一个可配置自动化的程序，创建一个工作流就是创建一个YAML文件
    一个仓库可以创建多个工作流，每一个执行不同的操作、
  》Events（事件）
    事件是指仓库触发运行工作流的具体的行为，比如创建一个 pull request，新建一个 issue、或者推送一个 commit。
    你也可以使用时间表触发一个工作流，或者通过请求一个  REST API，再或者手动触发。
  》任务（Jobs）
    任务是在同一个运行器上执行的一组步骤（steps）。一个步骤（steps）要么是一个shell 脚本（script）要么是一个动作（action）
  》动作（Actions）
    动作是 GitHub Actions 平台的一个自定义的应用，它会执行一个复杂但是需要频繁重复的作业。使用动作可以减少重复代码
  》运行器（Runners）
    一个运行器是一个可以运行工作流的服务。每一个运行器一次只运行一个单独的任务。GitHub 提供 Ubuntu Linux，Microsoft Windows 和 macOS 运行器，、
  》创建一个工作流步骤
   1. 在你的仓库，创建一个 .github/workflows/ 目录
   2. 在 .github/workflows/ 目录，创建一个文件，名为 learn-github-actions.yml ，添加下面的代码：
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
   3.提交这些改动，推送到你的 GitHub 仓库。
    </pre>
  </div>
</template>