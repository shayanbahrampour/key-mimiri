<template>
  <div class="d-flex flex-column">
    <CareerHeader />
    <div
      :class="['d-flex flex-column align-start white mx-auto', isMobile ? 'px-4 f-16' : 'px-16 scrolled-desktop']"
      :style="`max-width: ${globalMaxWidth}px;`"
      style="line-height: 2"
    >
      <v-img
        :class="[isMobile ? 'my-12' : 'mx-2 mt-16']"
        :max-height="isMobile ? '40' : '100'"
        :width="isMobile ? '100%' : '200'"
        contain
        src="/images/company/medarman.png"
      />
      <v-divider v-if="isMobile" style="width: 100% !important" />
      <p
        :class="[isMobile ? 'text-center my-2 f-20' : 'mt-6 f-18', isRTL ? 'ravi' : undefined]"
        style="color: #939393; line-height: 40px"
      >
        {{ $t('career.job_detail.job_description') }}
      </p>
      <v-divider v-if="isMobile" style="width: 100% !important" />
      <h4
        :class="[
          'mb-6 mt-16 f-30 font-weight-regular slategrey--text',
          isMobile ? 'mx-2' : undefined,
          isRTL ? 'ravi' : 'bel'
        ]"
      >
        {{ $t('career.job_detail.job_responsibility_title') }}
      </h4>
      <div
        v-for="(item, i) in items"
        v-if="!isRTL"
        :key="i"
        :class="['d-flex justify-center mb-8', isMobile ? 'px-2' : 'px-6']"
      >
        <v-icon class="ms-4 me-6 mt-4 align-self-start" size="6">mdi-circle</v-icon>
        <p class="mb-0 f-18 align-self-start" style="color: #818181">
          <span class="font-weight-regular" style="line-height: 40px">{{ item.title }}:</span>
          <span class="font-weight-light" style="line-height: 40px">{{ item.subtitle }}</span>
        </p>
      </div>
      <div v-if="isRTL">
        <span
          :class="['d-flex ravi justify-center mb-8', isMobile ? 'px-2' : 'f-18']"
          style="color: #939393; line-height: 40px"
          >{{ ResponsibleRTL }}</span
        >
      </div>

      <p
        v-if="!isMobile"
        :class="['font-weight-light mt-10 f-18', isRTL ? 'ravi' : undefined]"
        style="color: #939393; line-height: 40px"
      >
        {{ $t('career.job_detail.job_duty_first') }}
        <br /><br /><br />{{ $t('career.job_detail.job_duty_second') }}
      </p>
    </div>
    <div class="d-flex flex-column align-center w-full white">
      <div
        v-if="!isMobile"
        :class="[
          'd-flex flex-column align-start justify-space-between mt-16 white w-full',
          !isMobile ? 'px-16' : undefined
        ]"
      >
        <h4 :class="['text--darken-3 font-weight-regular', isRTL ? 'ravi f-30' : 'bel f-40']" style="color: #59595b">
          {{ $t('career.job_title') }}
        </h4>
        <div class="d-flex align-center justify-center">
          <JobsGrid />
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="white px-10">
      <h4 class="bel f-40 mt-10 text--darken-3 font-weight-regular" style="color: #59595b">Job positions</h4>
      <JobsGrid class="mt-10" />
    </div>
  </div>
</template>

<script>
import JobsGrid from '~/components/career/JobsGrid';
import CareerHeader from '~/components/career/CareerHeader';
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  data() {
    return {
      items: [
        {
          title: 'Being the escalation point',
          subtitle:
            'Senior project managers may be a key point of contact for stakeholders on projects that belong to junior staff. This provides an escalation path for issues the project manager cannot resolve on their own.'
        },
        {
          title: 'Saving struggling projects',
          subtitle:
            'When a project gets too far off track, a senior project manager may support the project manager or take over the project.'
        },
        {
          title: 'Interviewing and hiring',
          subtitle: 'Senior project managers may assist with interviewing and hiring new project staff.'
        },
        {
          title: 'Training and managing',
          subtitle: ' In some organizations, project managers report directly to senior project managers.'
        },
        {
          title: 'Mentoring and coaching',
          subtitle: 'Senior project managers are often expected to coach and mentor junior staff.'
        },
        {
          title: 'Acting as a role model',
          subtitle: 'People in this role may be expected to be a role model for junior members of the team.'
        },
        {
          title: 'Big-picture support',
          subtitle: 'A senior project manager may be expected to help with program management and other PMO duties.'
        },
        {
          title: 'Championing progress',
          subtitle:
            'Senior project managers may act as champions of learning, process improvement, and project management within the company.'
        }
      ],
      ResponsibleRTL:
        'به عنوان نقطه تشدید: مدیران ارشد پروژه ممکن است یک نقطه تماس کلیدی برای ذینفعان در پروژه هایی باشند که متعلق به کارکنان جوان هستند. این یک مسیر تشدید را برای مسائلی فراهم می کند که مدیر پروژه نمی تواند به تنهایی حل کند. صرفه جویی در پروژه های در حال مشکل: زمانی که یک پروژه خیلی از مسیر دور می شود، یک مدیر ارشد پروژه ممکن است از مدیر پروژه حمایت کند یا پروژه را به عهده بگیرد. مصاحبه و استخدام: مدیران ارشد پروژه ممکن است در مصاحبه و استخدام کارکنان جدید پروژه کمک کنند.آموزش و مدیریت: در برخی از سازمان ها، مدیران پروژه مستقیماً به مدیران ارشد پروژه گزارش می دهند. مربیگری و مربیگری: معمولاً از مدیران ارشد پروژه انتظار می رود که کارکنان خردسال را مربی و راهنمایی کنند. ایفای نقش به عنوان یک الگو: از افرادی که در این نقش حضور دارند انتظار می رود که الگویی برای اعضای خردسال تیم باشند. پشتیبانی از تصویر بزرگ: ممکن است از یک مدیر ارشد پروژه انتظار می رود که در مدیریت برنامه و سایر وظایف PMO کمک کند. پیشرفت قهرمانی: مدیران ارشد پروژه ممکن است به عنوان قهرمانان یادگیری، بهبود فرآیند و مدیریت پروژه در شرکت عمل کنند.'
    };
  },
  components: { VideoLoader, JobsGrid, CareerHeader }
};
</script>

<style lang="scss">
.mobile-contact {
  max-width: 90vw !important;
}

.desktop-contact {
  max-width: 70vw !important;
}

.scrolled-desktop {
  margin-top: 320px !important;
}
</style>
