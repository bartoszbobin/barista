/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaSearchResult } from '@dynatrace/shared/barista-definitions';
import { Observable } from 'rxjs';

@Injectable()
export class BaSearchService {
  constructor(private readonly _http: HttpClient) {}

  search(searchString: string): Observable<BaSearchResult[]> {
    return this._http.get<BaSearchResult[]>(
      `/api/v1/search/?q=${searchString}`,
    );
  }
}