﻿using System;
using System.Threading.Tasks;

namespace ReadLeadSucced_Data
{
    public interface IDataRepository<T> where T : class
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<T> SaveAsync(T entity);
    }
}
