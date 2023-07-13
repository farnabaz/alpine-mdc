<template>
  <NumberOne>
    <NumberTwo>
      <NumberThree>
        <NumberFour>
          <AnotherOne>
            <ContentSlot :use="$slots.xx">
              <span>x1</span>
            </ContentSlot>
            <slot name="ww">
              <span>w1</span>
            </slot>
          </AnotherOne>
        </NumberFour>
      </NumberThree>
    </NumberTwo>
  </NumberOne>
</template>
