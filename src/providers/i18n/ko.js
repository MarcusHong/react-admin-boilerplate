import englishMessages from 'ra-language-english'
import {mergeTranslations} from 'react-admin'

export default {
  ...mergeTranslations(englishMessages),
  ra: {
    action: {
      add_filter: '필터 추가',
      add: '추가',
      back: '뒤로',
      bulk_actions: '1 item selected |||| %{smart_count} items selected',
      cancel: '취소',
      close: '닫기',
      confirm: '확인',
      clear_input_value: 'Clear value',
      clone: '복사',
      create: '추가',
      delete: '삭제',
      secession: '탈퇴',
      edit: '수정',
      export: 'Export',
      list: '목록',
      ok: '확인',
      refresh: '새로고침',
      remove_filter: 'Remove this filter',
      remove: '삭제',
      save: '저장',
      search: '검색',
      show: '조회',
      sort: 'Sort',
      undo: 'Undo',
      excel: '엑셀 추가',
      expand: 'Expand'
    },
    message: {
      about: 'About',
      are_you_sure: 'Are you sure?',
      bulk_delete_content:
        'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
      bulk_delete_title: 'Delete %{name} |||| Delete %{smart_count} %{name}',
      delete_content: '정말로 %{name} #%{id}을 삭제하시겠습니까?',
      delete_title: '%{name} #%{id} 삭제',
      details: 'Details',
      error: "A client error occurred and your request couldn't be completed.",
      invalid_form: '입력이 유효하지 않습니다. 에러를 확인해 주세요.',
      loading: 'The page is loading, just a moment please',
      no: 'No',
      not_found: 'Either you typed a wrong URL, or you followed a bad link.',
      yes: 'Yes'
    },
    navigation: {
      no_results: '항목이 없습니다.',
      no_more_results: 'The page number %{page} is out of boundaries. Try the previous page.',
      page_out_of_boundaries: 'Page number %{page} out of boundaries',
      page_out_from_end: 'Cannot go after last page',
      page_out_from_begin: 'Cannot go before page 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd}, 총 %{total}개',
      page_rows_per_page: '페이지 크기:',
      next: '다음',
      prev: '이전'
    },
    page: {
      create: '%{name} 생성',
      dashboard: 'Dashboard',
      edit: '%{name} #%{id}',
      error: 'Something went wrong',
      list: '%{name}',
      loading: 'Loading',
      not_found: 'Not Found',
      show: '%{name} #%{id}'
    },
    input: {
      file: {
        upload_several: '폴더 및 파일을 끌어다 넣거나, 클릭해서 선택하십시오.',
        upload_single: '엑셀을 끌어다 넣거나, 클릭해서 선택하십시오.'
      },
      image: {
        upload_several: '이미지 여러 개 끌어다 넣거나, 클릭 후 여러 개 선택하십시오.',
        upload_single: '이미지를 끌어다 넣거나, 클릭해서 선택하십시오.'
      },
      references: {
        all_missing: 'Unable to find references data.',
        many_missing: 'At least one of the associated references no longer appears to be available.',
        single_missing: 'Associated reference no longer appears to be available.'
      }
    },
    auth: {
      user_menu: '메뉴',
      username: '사용자 이름',
      password: '패스워드',
      sign_in: '로그인',
      logout: '로그아웃',
      auth_check_error: '인증 에러',
      sign_in_error: '로그인 실패'
    },
    validation: {
      required: 'Required',
      minLength: 'Must be %{min} characters at least',
      maxLength: 'Must be %{max} characters or less',
      minValue: 'Must be at least %{min}',
      maxValue: 'Must be %{max} or less',
      number: 'Must be a number',
      email: 'Must be a valid email',
      oneOf: 'Must be one of: %{options}',
      regex: 'Must match a specific format (regexp): %{pattern}'
    },
    notification: {
      updated: 'Element updated |||| %{smart_count} elements updated',
      created: 'Element created',
      deleted: 'Element deleted |||| %{smart_count} elements deleted',
      bad_item: 'Incorrect element',
      item_doesnt_exist: 'Element does not exist',
      http_error: 'Server communication error',
      data_provider_error: 'dataProvider error. Check the console for details.',
      i18n_error: 'Cannot load the translations for the specified language',
      canceled: 'Action cancelled',
      logged_out: 'Your session has ended, please reconnect.'
    }
  },
  resources: {
    administrators: {
      name: '관리자',
      fields: {
        name: '아이디',
        password: '비밀번호',
        createdAt: '생성일',
        updatedAt: '수정일',
        role: '권한'
      }
    },
  },
  Unauthorized: 'Unauthorized',
  user: {
    list: {
      search: 'Search'
    },
    form: {
      summary: 'Summary',
      security: 'Security'
    },
    edit: {
      title: 'User "%{title}"'
    },
    action: {
      save_and_add: 'Save and Add',
      save_and_show: 'Save and Show'
    }
  },
  errors: {
    common: {
      required: '필수 입력 필드',
      number: '숫자만 입력 가능함'
    },
    auth: {
      notValidUserName: '유효한 이름이 아님 => 영어+숫자 사용',
      notValidPassword: '유효한 패스워드가 아님'
    }
  },
  NotFound: '찾을 수 없습니다.',
  AlreadyInUse: '이미 사용중입니다.',
  SamePassword: '기존 패스워드와 동일합니다.'
}
