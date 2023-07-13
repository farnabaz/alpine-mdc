<template>
  <NumberOne>
    <NumberTwo>
      <NumberThree>
        <NumberFour>
          <AnotherOne>
            <ContentSlot :use="$slots.xx">
              <span>x1</span>
            </ContentSlot>
          </AnotherOne>
        </NumberFour>
      </NumberThree>
    </NumberTwo>
  </NumberOne>
</template>
